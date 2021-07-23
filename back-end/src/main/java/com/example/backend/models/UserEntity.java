package com.example.backend.models;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Arrays;
import java.util.HashSet;

@Document(collection = "users")
@Data
public class UserEntity {

    @Id
    String id;

    @Indexed(unique = true)
    String phoneNumber;
    String password;
    //HashSet<String> familyId;
    String emailId;
    String firstName;
    String lastName;

}
