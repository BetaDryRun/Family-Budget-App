package com.example.backend.services;


import com.example.backend.exceptions.BadRequestException;
import com.example.backend.exchanges.DefaultResponse;
import com.example.backend.exchanges.GetUserFamilyResponse;
import com.example.backend.exchanges.GetUserResponse;
import com.example.backend.models.BudgetEntity;
import com.example.backend.models.UserEntity;
import com.example.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private WalletService walletService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public DefaultResponse createUser(UserEntity userEntity) {

        walletService.createWallet(userEntity.getPhoneNumber());
        userRepository.insert(userEntity);

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

    public UserEntity updateUser(UserEntity userEntity) {

        UserEntity entity = userRepository.save(userEntity);
        return entity;
    }
}
