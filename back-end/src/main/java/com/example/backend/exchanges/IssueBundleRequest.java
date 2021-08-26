package com.example.backend.exchanges;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class IssueBundleRequest {

    String accountHolderID;
    String name;
    String phoneNumber;
}
