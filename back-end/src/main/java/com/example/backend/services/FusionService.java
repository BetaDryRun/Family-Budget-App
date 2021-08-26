package com.example.backend.services;

import com.example.backend.exceptions.BadRequestException;
import com.example.backend.exchanges.CreateFusionAccountRequest;
import com.example.backend.exchanges.CreateFusionAccountResponse;
import com.example.backend.exchanges.DefaultResponse;
import com.example.backend.exchanges.IssueBundleRequest;
import com.example.backend.models.CreateUserPojo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class FusionService {

    @Autowired
    private RestTemplate restTemplate;

    // {{fusion_base_url}}/api/v1/ifi/{{ifiID}}/applications/newIndividual
    private static final String createUserUrl = "https://fusion.preprod.zeta.in/api/v1/ifi/140793/applications/newIndividual";
    private static final String issueBundleRequest = "https://fusion.preprod.zeta.in/api/v1/ifi/140793/bundles/1efa0950-5257-403b-a38d-61362060c565/issueBundle";

    public CreateFusionAccountResponse createAccount(CreateUserPojo request) throws BadRequestException {

        try {
            return restTemplate.postForObject(createUserUrl,request,CreateFusionAccountResponse.class);
        } catch (Exception e) {
            throw new BadRequestException("Exception in creating FUSION account");
        }

    }

    public Boolean issueBundle(IssueBundleRequest issueBundleRequest) throws BadRequestException {

        try {
            return restTemplate.getForObject(issueBundleRequest,)
        } catch (Exception e) {

            throw new BadRequestException("Exception in issuing bundle request");
        }

        return true;
    }

}
