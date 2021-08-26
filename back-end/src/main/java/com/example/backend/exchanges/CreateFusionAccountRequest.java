package com.example.backend.exchanges;


import lombok.Data;

@Data
public class CreateFusionAccountRequest {

    String ifiID;
    String formID;
    String applicationType="CREATE_ACCOUNT_HOLDER";
    String spoolID;
    String individualType;
    String salutation;
    String firstName;
    String middleName;
    String lastName;
            "profilePicURL": "",
}
