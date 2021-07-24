package com.example.backend.exchanges;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;

import java.util.List;

@Data
public class GetUserResponse {


    String id;

    String phoneNumber;

    List<GetFamilyResponse> families;
    String emailId;
    String firstName;
    String lastName;
}
