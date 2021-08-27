package com.example.backend.exchanges;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class IssueBundleRequest {

    String requestID;
    String accountHolderID;
    String name;
    String phoneNumber;
}
