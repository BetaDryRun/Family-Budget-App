package com.example.backend.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateUserPojo {

    private String ifiID;
    private String formID;
    private String applicationType;
    private String spoolID;
    private String individualType;
    private String salutation;

    private String firstName;
    private String middleName;
    private String lastName;

    private String profilePicURL;
    private Dob dob;
    private String gender;
    private String mothersMaidenName;
    private KYCDetails kyc;
    private List<Vectors> vectors;
    private List<String> pops;
    private CustomFields customFields;

}
