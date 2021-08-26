package com.example.backend.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class KYCDetails {

    private String kycStatus;
    private String kycStatusPostExpiry;
    private KycAttributes kycAttributes;
    private String authType;
    private AuthData authData;

}
