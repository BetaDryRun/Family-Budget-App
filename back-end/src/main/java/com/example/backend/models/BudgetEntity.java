package com.example.backend.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;

@Data
@AllArgsConstructor
@ToString
public class BudgetEntity {

    String id;
    String phoneNumber;
    long budget;
    long remainingBudget;
}
