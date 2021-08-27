package com.example.backend.models.issue;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Accounts {

    private String bundleID;
    private String accountHolderID;
    private String accountID;
}
