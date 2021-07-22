package com.example.backend.models;


import lombok.Data;

import java.util.Arrays;

@Data
public class UserEntity {

    String phoneNumber;
    String password;
    String[] familyId;
    String emailId;
    String walletId;
    String name;

}
