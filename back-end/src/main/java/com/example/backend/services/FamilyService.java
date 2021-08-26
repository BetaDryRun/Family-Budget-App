package com.example.backend.services;

import com.example.backend.exceptions.BadRequestException;
import com.example.backend.exchanges.*;
import com.example.backend.models.BudgetEntity;
import com.example.backend.models.FamilyEntity;
import com.example.backend.models.UserEntity;
import com.example.backend.models.issue.IssueResponse;
import com.example.backend.repositories.FamilyRepository;
import com.example.backend.repositories.UserRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

@Service
@Log4j2
public class FamilyService {

    @Autowired
    FamilyRepository familyRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;

    @Autowired
    FusionService fusionService;

    public DefaultResponse createFamily(FamilyEntity familyEntity, String userId) throws BadRequestException {

        Optional<UserEntity> response = userRepository.findById(userId);

        if (response.isPresent()) {
            UserEntity user = response.get();
            UserEntity userRef = new UserEntity();
            userRef.setId(user.getId());

            BudgetEntity budgetEntity = new BudgetEntity(user.getId(), user.getPhoneNumber(), -1, -1);
            familyEntity.getAdmins_id().add(userId);
            familyEntity.getMembers_id().add(userId);

            familyEntity.getMembersBudget().add(budgetEntity);

            CreateFusionAccountRequest createFusionAccountRequest = new CreateFusionAccountRequest("CEPPA343242");
            System.out.println(createFusionAccountRequest);
            CreateFusionAccountResponse account = fusionService.createAccount(createFusionAccountRequest);

            IssueBundleRequest issueBundleRequest = new IssueBundleRequest(account.getIndividualID(),familyEntity.getName(), "+917478547856");
            System.out.println(issueBundleRequest);
            IssueResponse issueResponse = fusionService.issueBundle(issueBundleRequest);

            familyEntity.setAccountId(issueResponse.getAccounts().get(0).getAccountID());

            FamilyEntity insert = familyRepository.insert(familyEntity);

            userService.addFamily(insert.getId(),userId);

        } else {
            throw new BadRequestException("User not found");
        }


        DefaultResponse defaultResponse = new DefaultResponse();
        defaultResponse.setCode("200");
        defaultResponse.setMessages(new String[]{"Family Created"});
        return defaultResponse;
    }

    @Transactional
    public DefaultResponse addMember(AddMemberRequest addMemberRequest, String userId) throws BadRequestException {

        Optional<FamilyEntity> familyOptional = familyRepository.findById(addMemberRequest.getFamilyId());

        if (familyOptional.isPresent()) {

            FamilyEntity familyEntity = familyOptional.get();
            if (familyEntity.getAdmins_id().contains(userId)) {
                String id = userRepository.findUserEntitiesByPhoneNumber(addMemberRequest.getPhoneNumber()).getId();
                userService.addFamily(addMemberRequest.getFamilyId(),id);
                familyEntity.getMembers_id().add(id);
                BudgetEntity budgetEntity = new BudgetEntity(id, addMemberRequest.getPhoneNumber(), -1, -1);
                familyEntity.getMembersBudget().add(budgetEntity);
                familyRepository.save(familyEntity);
            } else {
                throw new BadRequestException("Only admins allowed");
            }

        } else {
            throw new BadRequestException("Family Does not exists");
        }
        return new DefaultResponse(new String[]{"Member added"},"200");
    }


    @Transactional
    public DefaultResponse addAdmin(AddMemberRequest addMemberRequest, String userId) throws BadRequestException {

        Optional<FamilyEntity> familyOptional = familyRepository.findById(addMemberRequest.getFamilyId());

        if(!familyOptional.isPresent())
            throw new BadRequestException("Family Does not exists");

        FamilyEntity familyEntity = familyOptional.get();

        if (!familyEntity.getAdmins_id().contains(userId))
            throw new BadRequestException("Only Admins Required");

        String id = userRepository.findUserEntitiesByPhoneNumber(addMemberRequest.getPhoneNumber()).getId();
        familyEntity.getAdmins_id().add(id);
        familyRepository.save(familyEntity);

        return new DefaultResponse(new String[]{"Admin added"},"200");
    }

    @Transactional
    public DefaultResponse addSeasoned(AddMemberRequest addMemberRequest, String userId) throws BadRequestException {

        Optional<FamilyEntity> familyOptional = familyRepository.findById(addMemberRequest.getFamilyId());

        if(!familyOptional.isPresent())
            throw new BadRequestException("Family Does not exists");

        FamilyEntity familyEntity = familyOptional.get();

        if (!familyEntity.getAdmins_id().contains(userId))
            throw new BadRequestException("Only Admins Required");

        String id = userRepository.findUserEntitiesByPhoneNumber(addMemberRequest.getPhoneNumber()).getId();
        familyEntity.getSeasoned_id().add(id);
        familyRepository.save(familyEntity);

        return new DefaultResponse(new String[]{"Admin added"},"200");
    }
}
