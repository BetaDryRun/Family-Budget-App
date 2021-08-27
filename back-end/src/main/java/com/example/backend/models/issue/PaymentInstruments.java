package com.example.backend.models.issue;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PaymentInstruments {

    private String bundleID;

    private String resourceID;
    private String status;
    private String targetAccount;

}
