package com.example.backend.controllers;


import com.example.backend.exceptions.BadRequestException;
import com.example.backend.exchanges.AddMemberRequest;
import com.example.backend.exchanges.DefaultResponse;
import com.example.backend.models.FamilyEntity;
import com.example.backend.security.facade.IAuthenticationFacade;
import com.example.backend.security.models.UserDetailsCustom;
import com.example.backend.services.FamilyService;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpServerErrorException;

@RestController
public class FamilyController {
    @Autowired
    FamilyService familyService;

    @Autowired
    private IAuthenticationFacade authenticationFacade;

    @PostMapping("/family")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Created", response = DefaultResponse.class),
            @ApiResponse(code = 400, message = "Bad request, adjust before retrying", response = DefaultResponse.class),
            @ApiResponse(code = 500, message = "Internal Server Error",response = HttpServerErrorException.InternalServerError.class)
    })
    public ResponseEntity<DefaultResponse> createFamily(@RequestBody FamilyEntity familyEntity) throws BadRequestException {

        UserDetailsCustom loggedInUser = (UserDetailsCustom) authenticationFacade.getPrincipal();
        if (loggedInUser == null) {
            throw new BadRequestException("User is not logged in!");
        }
        DefaultResponse defaultResponse =  familyService.createFamily(familyEntity, loggedInUser.getUserId());

        return ResponseEntity.ok().body(defaultResponse);
    }

    @PutMapping("family/addMember")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Added", response = DefaultResponse.class),
            @ApiResponse(code = 400, message = "Bad request, adjust before retrying", response = DefaultResponse.class),
            @ApiResponse(code = 500, message = "Internal Server Error",response = HttpServerErrorException.InternalServerError.class)
    })
    public  ResponseEntity<DefaultResponse> addMember(@RequestBody AddMemberRequest addMemberRequest) throws BadRequestException {

        UserDetailsCustom loggedInUser = (UserDetailsCustom) authenticationFacade.getPrincipal();
        if (loggedInUser == null) {
            throw new BadRequestException("User is not logged in!");
        }
        DefaultResponse defaultResponse = familyService.addMember(addMemberRequest, loggedInUser.getUserId());

        return ResponseEntity.ok(defaultResponse);
    }


    @PutMapping("family/addAdmin")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Added", response = DefaultResponse.class),
            @ApiResponse(code = 400, message = "Bad request, adjust before retrying", response = DefaultResponse.class),
            @ApiResponse(code = 500, message = "Internal Server Error",response = HttpServerErrorException.InternalServerError.class)
    })
    public  ResponseEntity<DefaultResponse> addAdmin(@RequestBody AddMemberRequest addMemberRequest) throws BadRequestException {

        UserDetailsCustom loggedInUser = (UserDetailsCustom) authenticationFacade.getPrincipal();
        if (loggedInUser == null) {
            throw new BadRequestException("User is not logged in!");
        }
        DefaultResponse defaultResponse = familyService.addAdmin(addMemberRequest, loggedInUser.getUserId());

        return ResponseEntity.ok(defaultResponse);
    }

    @PutMapping("family/addSeasoned")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Added", response = DefaultResponse.class),
            @ApiResponse(code = 400, message = "Bad request, adjust before retrying", response = DefaultResponse.class),
            @ApiResponse(code = 500, message = "Internal Server Error",response = HttpServerErrorException.InternalServerError.class)
    })
    public  ResponseEntity<DefaultResponse> addSeasoned(@RequestBody AddMemberRequest addMemberRequest) throws BadRequestException {

        UserDetailsCustom loggedInUser = (UserDetailsCustom) authenticationFacade.getPrincipal();
        if (loggedInUser == null) {
            throw new BadRequestException("User is not logged in!");
        }
        DefaultResponse defaultResponse = familyService.addSeasoned(addMemberRequest, loggedInUser.getUserId());

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
