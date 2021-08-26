package com.example.backend.exchanges;

import lombok.Data;

@Data
public class IssueBundleRequest {

    String accountHolderID;
    String name;
    String phoneNumber;
}
