package com.example.backend.services;

import com.example.backend.exceptions.BadRequestException;
import com.example.backend.exchanges.DefaultResponse;
import com.example.backend.models.BudgetEntity;
import com.example.backend.models.FamilyEntity;
import com.example.backend.models.UserEntity;
import com.example.backend.repositories.FamilyRepository;
import com.example.backend.repositories.UserRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public DefaultResponse createFamily(FamilyEntity familyEntity, String userId) throws BadRequestException {

        Optional<UserEntity> response = userRepository.findById(userId);

        if(response.isPresent()) {
            UserEntity user = response.get();
            UserEntity userRef = new UserEntity();
            userRef.setId(user.getId());

            BudgetEntity budgetEntity = new BudgetEntity(user.getId(),user.getPhoneNumber(),-1,-1);
            familyEntity.getAdmins_id().add(userId);
            familyEntity.getMembers_id().add(userId);

            familyEntity.getMembersBudget().add(budgetEntity);
            FamilyEntity insert = familyRepository.insert(familyEntity);
            List<String> families = new ArrayList<>();

            if(user.getFamilies_id()!=null)
                families = new ArrayList<>(user.getFamilies_id());

            families.add(insert.getId());
            user.setFamilies_id(families);

            userRepository.save(user);

        }
        else {
            throw new BadRequestException("User not found");
        }


        DefaultResponse defaultResponse = new DefaultResponse();
        defaultResponse.setCode("200");
        defaultResponse.setMessages(new String[]{"Family Created"});
        return defaultResponse;
    }

    public DefaultResponse addMember(String phoneNumber) {
    }
}
