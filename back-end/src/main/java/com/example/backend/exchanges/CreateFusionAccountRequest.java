package com.example.backend.exchanges;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
class KycDetails {

    String authType;
    AuthData authData;

    public KycDetails(String pan) {
        this.authType="PAN";
        this.authData = new AuthData();
        this.authData.setPAN(pan);
    }
}

@Data
@ToString
public class CreateFusionAccountRequest {

    KycDetails kycDetails;

    public CreateFusionAccountRequest(String pan) {
        this.kycDetails = new KycDetails(pan);

    }
}
