package com.example.backend.controllers;


import com.example.backend.exceptions.BadRequestException;
import com.example.backend.exchanges.DefaultResponse;
import com.example.backend.exchanges.GetUserResponse;
import com.example.backend.models.UserEntity;

import com.example.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/user")
    public ResponseEntity<DefaultResponse> createUser(@RequestBody UserEntity userEntity) {


        // TODO : Raise error if createUserRequest has any field null
        DefaultResponse defaultResponse;
        try {
            defaultResponse = userService.createUser(userEntity);
            return ResponseEntity.status(HttpStatus.CREATED).body(defaultResponse);
        } catch (DuplicateKeyException e) {
            defaultResponse = new DefaultResponse();
            defaultResponse.setCode("500");
            defaultResponse.setMessages(new String[]{"Phone number already registered"});
            System.out.println(e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(defaultResponse);
        }
    }

    @GetMapping("/user")
    public ResponseEntity<List<GetUserResponse>> getUser(@RequestParam String phoneNumber) throws BadRequestException {
        List<GetUserResponse> user = userService.getUser(phoneNumber);
        return ResponseEntity.ok(user);
    }

    @DeleteMapping("/user")
    public ResponseEntity<DefaultResponse> deleteUser(@RequestParam String id) {

        // TODO: Throw error if id is null
        // TODO: Throw error if user does not exists
        DefaultResponse defaultResponse = userService.deleteUser(id);

        return ResponseEntity.status(200).body(defaultResponse);
    }

    @PutMapping("/user")
    public ResponseEntity<UserEntity> updateUser(@RequestBody UserEntity userEntity) {


        // TODO : Raise error if user is not present

        UserEntity user = userService.updateUser(userEntity);
        return ResponseEntity.status(HttpStatus.OK).body(user);
    }



    @ExceptionHandler({BadRequestException.class})
    public ResponseEntity<DefaultResponse> handleException(BadRequestException badRequestException) {
        DefaultResponse defaultResponse = new DefaultResponse();
        defaultResponse.setCode("500");
        defaultResponse.setMessages(new String[]{badRequestException.getMessage()});
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(defaultResponse);
    }

}
