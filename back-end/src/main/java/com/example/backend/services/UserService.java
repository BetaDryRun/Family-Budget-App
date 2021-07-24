package com.example.backend.services;


import com.example.backend.exceptions.BadRequestException;
import com.example.backend.exchanges.DefaultResponse;
import com.example.backend.models.UserEntity;
import com.example.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private WalletService walletService;

    @Autowired
    private UserRepository userRepository;

    public DefaultResponse createUser(UserEntity userEntity) {

        walletService.createWallet(userEntity.getPhoneNumber());
        userRepository.insert(userEntity);

        DefaultResponse defaultResponse = new DefaultResponse();
        defaultResponse.setCode("200");
        defaultResponse.setMessages(new String[]{"User Created Successfully"});
        return defaultResponse;
    }

    public UserEntity getUser(String phoneNumber) throws BadRequestException {

        UserEntity user = userRepository.findByPhoneNumber(phoneNumber);
        if(user == null)
            throw new BadRequestException("User does not exists");
        return user;
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
