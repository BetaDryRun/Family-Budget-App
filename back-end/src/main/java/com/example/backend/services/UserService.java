package com.example.backend.services;


import com.example.backend.exceptions.BadRequestException;
import com.example.backend.exchanges.*;
import com.example.backend.models.BudgetEntity;
import com.example.backend.models.FamilyEntity;
import com.example.backend.models.UserEntity;
import com.example.backend.models.issue.IssueResponse;
import com.example.backend.repositories.FamilyRepository;
import com.example.backend.repositories.UserRepository;
import com.example.backend.security.models.UserDetailsCustom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private WalletService walletService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FamilyRepository familyRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private FusionService fusionService;

    public DefaultResponse createUser(UserEntity userEntity) throws BadRequestException {
        userEntity.setPassword(passwordEncoder.encode(userEntity.getPassword()));

        CreateFusionAccountRequest createFusionAccountRequest = new CreateFusionAccountRequest(userEntity.getPanNumber());
        System.out.println(createFusionAccountRequest);
        CreateFusionAccountResponse account = fusionService.createAccount(createFusionAccountRequest);

        IssueBundleRequest issueBundleRequest = new IssueBundleRequest(account.getIndividualID(),userEntity.getFirstName(), userEntity.getPhoneNumber());
        IssueResponse issueResponse = fusionService.issueBundle(issueBundleRequest);

        userEntity.setAccountId(issueResponse.getAccounts().get(0).getAccountID());
        userEntity.setResourceId(issueResponse.getPaymentInstruments().get(0).getResourceID());


        System.out.println(userEntity);
        userRepository.save(userEntity);


        DefaultResponse defaultResponse = new DefaultResponse();
        defaultResponse.setCode("200");
        defaultResponse.setMessages(new String[]{"User Created Successfully"});
        return defaultResponse;
    }

    public List<GetUserResponse> getUser(String phoneNumber) throws BadRequestException {

        LookupOperation lookupOperation= LookupOperation.newLookup()
                .from("families")
                .localField("admins_id")
                .foreignField("id")
                .as("families");

        ProjectionOperation projectionOperation = new ProjectionOperation().andExclude("password").andExclude("families_id");
        MatchOperation matchOperation = Aggregation.match(Criteria.where("phoneNumber").is(phoneNumber));
        Aggregation aggregationOperation = Aggregation.newAggregation(matchOperation,lookupOperation,projectionOperation);

        List<GetUserResponse> getUserResponses = mongoTemplate.aggregate(aggregationOperation,"users", GetUserResponse.class).getMappedResults();

        for(GetUserResponse g : getUserResponses) {
            List<GetUserFamilyResponse> families = g.getFamilies();

            for(GetUserFamilyResponse f : families) {


                List<BudgetEntity> membersBudget = f.getMembersBudget();
                membersBudget = membersBudget.stream().filter(budgetEntity -> budgetEntity.getPhoneNumber().equals(phoneNumber)).collect(Collectors.toList());
                f.setMembersBudget(membersBudget);
            }
        }

        return getUserResponses;
    }

    public DefaultResponse deleteUser(String id) {

        userRepository.deleteById(id);
        DefaultResponse defaultResponse = new DefaultResponse();
        defaultResponse.setCode("200");
        defaultResponse.setMessages(new String[]{"User Deleted Successfully"});

        return defaultResponse;
    }

    @Transactional
    public DefaultResponse updateUser(UserEntity userEntity) throws BadRequestException {

        Optional<UserEntity> id = userRepository.findById(userEntity.getId());
        if(!id.isPresent())
            throw new BadRequestException("user does not exists");

        userEntity.setPassword(id.get().getPassword());
        try {
            userRepository.save(userEntity);
        } catch (DuplicateKeyException e) {
            throw new BadRequestException("User with mobile number already exists");
        }

        return new DefaultResponse(new String[]{"User Updated"},"200");
    }

    @Transactional
    public void addFamily(String familyId,String userId) {
        Optional<UserEntity> entity = userRepository.findById(userId);
        UserEntity user = userRepository.findById(userId).get();
        List<String> families = new ArrayList<>();

        if (user.getFamilies_id() != null)
            families = new ArrayList<>(user.getFamilies_id());

        families.add(familyId);
        user.setFamilies_id(families);

        userRepository.save(user);
    }

    public List<FamilyEntity> findFamilies(UserDetailsCustom loggedInUser) throws BadRequestException {

        Optional<UserEntity> user = userRepository.findById(loggedInUser.getUserId());
        if (!user.isPresent()) {
            throw new BadRequestException("user doesnot exist");
        }

        List <String> families_id = user.get().getFamilies_id();
        List<FamilyEntity> families = new ArrayList<FamilyEntity>();

        for(String family_id: families_id) {
            Optional<FamilyEntity> tempFam = familyRepository.findById(family_id);
            families.add(tempFam.get());
        }
        return families;
    }
}
