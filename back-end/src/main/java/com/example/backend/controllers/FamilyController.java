package com.example.backend.controllers;


import com.example.backend.exceptions.BadRequestException;
import com.example.backend.exchanges.DefaultResponse;
import com.example.backend.models.FamilyEntity;
import com.example.backend.services.FamilyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class FamilyController {


    @Autowired
    FamilyService familyService;

    @PostMapping("/family")
    public ResponseEntity<DefaultResponse> createFamily(@RequestBody FamilyEntity familyEntity , @RequestParam String id) throws BadRequestException {

        System.out.println(familyEntity);
        /*TODO: ID should come from JWT*/
        DefaultResponse defaultResponse =  familyService.createFamily(familyEntity,id);

        return ResponseEntity.ok().body(defaultResponse);
    }


    @ExceptionHandler({BadRequestException.class})
    public ResponseEntity<DefaultResponse> handleException(BadRequestException badRequestException) {
        DefaultResponse defaultResponse = new DefaultResponse();
        defaultResponse.setCode("500");
        defaultResponse.setMessages(new String[]{badRequestException.getMessage()});
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(defaultResponse);
    }


}
