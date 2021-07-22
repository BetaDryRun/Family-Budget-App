package com.example.backend.exchanges;

import lombok.Data;

@Data
public class CreateUserRequest {

    String phoneNumber;
    String password;
    String email;
    String firstName;
    String lastName;
}
