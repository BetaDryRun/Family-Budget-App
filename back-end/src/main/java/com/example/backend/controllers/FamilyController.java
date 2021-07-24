package com.example.backend.controllers;


import com.example.backend.exceptions.BadRequestException;
import com.example.backend.exchanges.DefaultResponse;
import com.example.backend.models.FamilyEntity;
import com.example.backend.services.FamilyService;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class FamilyController {


    @Autowired
    FamilyService familyService;

    @PostMapping("/family")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Created", response = DefaultResponse.class),
            @ApiResponse(code = 400, message = "Bad request, adjust before retrying", response = DefaultResponse.class),
    })
    public ResponseEntity<DefaultResponse> createFamily(@RequestBody FamilyEntity familyEntity , @RequestParam String id) throws BadRequestException {

        /*TODO: ID should come from JWT*/
        DefaultResponse defaultResponse =  familyService.createFamily(familyEntity,id);

        return ResponseEntity.ok().body(defaultResponse);
    }

    @PutMapping("family/addMember")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Added", response = DefaultResponse.class),
            @ApiResponse(code = 400, message = "Bad request, adjust before retrying", response = DefaultResponse.class),
    })
    public  ResponseEntity<DefaultResponse> addMember(@RequestParam String phoneNumber) {

        DefaultResponse defaultResponse = familyService.addMember(phoneNumber);

        return ResponseEntity.ok(defaultResponse);
    }


    @ExceptionHandler({BadRequestException.class})
    public ResponseEntity<DefaultResponse> handleException(BadRequestException badRequestException) {
        DefaultResponse defaultResponse = new DefaultResponse();
        defaultResponse.setCode("500");
        defaultResponse.setMessages(new String[]{badRequestException.getMessage()});
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(defaultResponse);
    }


}
