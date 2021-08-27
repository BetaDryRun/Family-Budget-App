package com.example.backend.models;


import com.fasterxml.jackson.annotation.*;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;


import java.util.HashSet;
import java.util.List;

@Document(collection = "users")
@Data
@JsonIdentityInfo(generator=ObjectIdGenerators.PropertyGenerator.class, property="id")
public class UserEntity {

    @Id
    String id;

    @Indexed(unique = true)
    String phoneNumber;
    String password;

    List<String> families_id;
    String emailId;

    @Override
    public String toString() {
        return "UserEntity{" +
                "id='" + id + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", password='" + password + '\'' +
                ", families_id=" + families_id +
                ", emailId='" + emailId + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", panNumber='" + panNumber + '\'' +
                ", accountId='" + accountId + '\'' +
                ", resourceId='" + resourceId + '\'' +
                '}';
    }

    String firstName;
    String lastName;

    String panNumber;
    String accountId;
    String resourceId;

}
