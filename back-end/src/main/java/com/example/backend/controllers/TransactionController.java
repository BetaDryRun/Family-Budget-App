package com.example.backend.controllers;

import com.example.backend.exceptions.BadRequestException;
import com.example.backend.exchanges.DefaultResponse;
import com.example.backend.models.UserEntity;
import com.example.backend.services.FusionService;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpServerErrorException;

@RestController
public class TransactionController {

    @Autowired
    private FusionService fusionService;

    @GetMapping("/transaction")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Created", response = DefaultResponse.class),
            @ApiResponse(code = 400, message = "Bad request, adjust before retrying", response = DefaultResponse.class),
            @ApiResponse(code = 500, message = "Internal Server Error",response = HttpServerErrorException.InternalServerError.class)
    })
    public ResponseEntity<DefaultResponse> makeWalletPayment(@RequestParam String receiverPhoneNumber, @RequestParam Integer amount) {
        DefaultResponse defaultResponse;
        try {
            defaultResponse = fusionService.transferMoney(receiverPhoneNumber, amount);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(defaultResponse);
        } catch (Exception e) {
            defaultResponse = new DefaultResponse();
            defaultResponse.setCode("500");
            defaultResponse.setMessages(new String[]{"Transaction not completed"});
            System.out.println(e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(defaultResponse);
        }
    }

    @GetMapping("/balance")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Created", response = DefaultResponse.class),
            @ApiResponse(code = 400, message = "Bad request, adjust before retrying", response = DefaultResponse.class),
            @ApiResponse(code = 500, message = "Internal Server Error",response = HttpServerErrorException.InternalServerError.class)
    })
    public ResponseEntity<DefaultResponse> checkBalance(@RequestParam String accountId) {
        DefaultResponse defaultResponse = new DefaultResponse();
        try {
            Integer balance = fusionService.checkBalance(accountId);
            defaultResponse.setMessages(new String[]{"Your account balance is " + balance});
            defaultResponse.setCode("200");
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(defaultResponse);
        } catch (Exception e) {
            defaultResponse = new DefaultResponse();
            defaultResponse.setCode("500");
            defaultResponse.setMessages(new String[]{"Balance not available"});
            System.out.println(e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(defaultResponse);
        }
    }

    @GetMapping("/addMoney")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Created", response = DefaultResponse.class),
            @ApiResponse(code = 400, message = "Bad request, adjust before retrying", response = DefaultResponse.class),
            @ApiResponse(code = 500, message = "Internal Server Error",response = HttpServerErrorException.InternalServerError.class)
    })
    public ResponseEntity<DefaultResponse> addMoneyToAccount(String familyId, Integer amount) {
        DefaultResponse defaultResponse = new DefaultResponse();
        try {
            defaultResponse = fusionService.addMoneyToAccount(familyId, amount);
            defaultResponse.setMessages(new String[]{"Your money has been successfully added"});
            defaultResponse.setCode("200");
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(defaultResponse);
        } catch (Exception e) {
            defaultResponse = new DefaultResponse();
            defaultResponse.setCode("500");
            defaultResponse.setMessages(new String[]{"Unable to add money"});
            System.out.println(e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(defaultResponse);
        }
    }
}
