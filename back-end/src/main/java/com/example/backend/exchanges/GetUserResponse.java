package com.example.backend.exchanges;

import lombok.Data;

import java.util.List;

@Data
public class GetUserResponse {


    String id;

    String phoneNumber;

    List<GetUserFamilyResponse> families;
    String emailId;
    String firstName;
    String lastName;
}
