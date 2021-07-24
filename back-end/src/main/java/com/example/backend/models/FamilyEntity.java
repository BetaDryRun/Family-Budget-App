package com.example.backend.models;


import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "families")
@Data
public class FamilyEntity {

    @Id
    String id;
    String name;
    String link;
    String desc;

    @DBRef(lazy = true)
    List<UserEntity> members;
    @DBRef(lazy = true)
    List<UserEntity> admins;
    @DBRef(lazy = true)
    List<UserEntity> seasoned;

    List<BudgetEntity> membersBudget;

    double budget;

    List<String> tags;



}
