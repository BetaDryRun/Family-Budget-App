package com.example.backend.models;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class BudgetEntity {

    String id;
    String phoneNumber;
    long budget;
    long remainingBudget;
}
