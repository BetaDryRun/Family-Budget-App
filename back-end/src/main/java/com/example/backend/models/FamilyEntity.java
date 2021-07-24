package com.example.backend.models;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "families")
@Data
@JsonIdentityInfo(generator=ObjectIdGenerators.PropertyGenerator.class, property="id")
public class FamilyEntity {

    @Id
    String id;
    String name;
    String link;
    String desc;


    List<String> members_id;
    List<String> admins_id;
    List<String> seasoned_id;

    List<BudgetEntity> membersBudget;

    double budget;

    List<String> tags;



}
