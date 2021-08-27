package com.example.backend.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Amount {
    private String currency = "INR";
    private Integer amount;

    public Amount(Integer amount) {
        this.amount = amount;
    }
}
