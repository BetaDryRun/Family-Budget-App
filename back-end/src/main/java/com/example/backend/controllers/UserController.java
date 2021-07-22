package com.example.backend.controllers;


import com.example.backend.exchanges.CreateUserRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @PostMapping("/user")
    public ResponseEntity<Void> createUser(@RequestBody CreateUserRequest createUserRequest) {


        System.out.println(createUserRequest);
        return ResponseEntity.ok().build();
    }
}
