package com.example.backend.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class TransactionEntity {

    private String requestID = "69";
    private Amount amount;
    private String transferCode = "ATLAS_P2M_AUTH";
    private String debitAccountID;
    private String creditAccountID;
    private long transferTime = 1581083590962L;
    private String remarks = "NOT A TEST";

    public TransactionEntity(String debitAccountID, String creditAccountID, Integer amount) {
        this.debitAccountID = debitAccountID;
        this.creditAccountID = creditAccountID;
        this.amount = new Amount(amount);
    }

}
