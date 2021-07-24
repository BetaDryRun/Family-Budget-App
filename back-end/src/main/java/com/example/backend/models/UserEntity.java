package com.example.backend.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;


import java.util.HashSet;
import java.util.List;

@Document(collection = "users")
@Data
public class UserEntity {

    @Id
    String id;

    @Indexed(unique = true)
    String phoneNumber;
    String password;

    @DBRef(lazy = true)
    @JsonIgnore
    List<FamilyEntity> families;
    String emailId;
    String firstName;
    String lastName;

}
