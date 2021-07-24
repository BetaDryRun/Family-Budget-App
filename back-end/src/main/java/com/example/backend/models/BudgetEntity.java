package com.example.backend.models;

import lombok.Data;

@Data
public class BudgetEntity {

    String id;
    String phoneNumber;
    String budget;
    String remainingBudget;
}
