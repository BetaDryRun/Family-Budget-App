package com.example.backend.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class BalanceEntity {
    private Integer balance;
    private String currency = "INR";
    private String lastTransactionID;
    private String accountingType = "LIABILITY";
}
