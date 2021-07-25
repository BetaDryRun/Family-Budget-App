package com.example.backend.exchanges;

import com.example.backend.models.BudgetEntity;
import lombok.Data;

import java.util.List;

@Data
public class GetUserFamilyResponse {

    String id;
    String name;
    String link;
    String desc;

    List<BudgetEntity> membersBudget;

    List<String> tags;
}
