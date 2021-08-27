package com.example.backend.models.issue;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class IssueResponse {

    private String requestID;
    private List<Accounts> accounts;

    private List<PaymentInstruments> paymentInstruments;

}
