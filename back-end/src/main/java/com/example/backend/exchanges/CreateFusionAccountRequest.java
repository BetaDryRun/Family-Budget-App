package com.example.backend.exchanges;

import lombok.Data;



@Data
public class CreateFusionAccountRequest {

   String authType;
   AuthData authData;

   public CreateFusionAccountRequest(String pan) {
       this.authType="PAN";
       this.authData = new AuthData();
       this.authData.setPAN(pan);
   }
}
