package com.example.backend.services;

import com.example.backend.exceptions.BadRequestException;
import com.example.backend.exchanges.CreateFusionAccountRequest;
import com.example.backend.exchanges.CreateFusionAccountResponse;
import com.example.backend.exchanges.DefaultResponse;
import com.example.backend.exchanges.IssueBundleRequest;
import com.example.backend.models.BalanceEntity;
import com.example.backend.models.TransactionEntity;
import com.example.backend.models.issue.IssueResponse;
import com.example.backend.repositories.FamilyRepository;
import com.example.backend.repositories.UserRepository;
import com.example.backend.security.facade.IAuthenticationFacade;
import com.example.backend.security.models.UserDetailsCustom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.UUID;

@Service
public class FusionService {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private IAuthenticationFacade authenticationFacade;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FamilyRepository familyRepository;

    // {{fusion_base_url}}/api/v1/ifi/{{ifiID}}/applications/newIndividual
    private static final String createUserUrl = "https://fusion.preprod.zeta.in/api/v1/ifi/140793/applications/newIndividual";
    private static final String issueBundleRequestUrl = "https://fusion.preprod.zeta.in/api/v1/ifi/140793/bundles/1efa0950-5257-403b-a38d-61362060c565/issueBundle";
    private static final String a2aTransactionUrl = "https://fusion.preprod.zeta.in/api/v1/ifi/140793/transfers";
    private static final String checkBalanceUrl = "https://fusion.preprod.zeta.in/api/v1/ifi/140793/accounts/";

    public CreateFusionAccountResponse createAccount(CreateFusionAccountRequest request) throws BadRequestException {

        try {
            HttpHeaders headers = new HttpHeaders();
            headers.set("X-Zeta-AuthToken", "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidGFnIjoia3E2R3dhNVpjXzMyd0FOU2xwdkpEQSIsImFsZyI6IkExMjhHQ01LVyIsIml2IjoiUloxUC1FSWUyRmZpM0tJNSJ9.9HiGnRWPs72xyHkz318uarugQxSVzqEksXraJ8N0zec.MEJhqMICEqUgfSrfT5tX2g.9XiRnjXxE08Lr-lh06h7RwZvtJuLdxqkcG02A1ojTGbnoKunZKfVNhQ-rJihnoltutrPQwYPalW8lxM_pnnZ9zZS6RMO-S_UM_gx5p5IFDe1IUlOH3utXWEczdYhcCrnBAXKXAzRCnjh_-Av_RAWi33wZOfcMQrVh3IjAUMtO_R18tK6oekDRt2ivHT9vJ-k0w0iHxnfvLhzjBvKpFPkkuqCj6V9jMEwnjUAB4hIlLPB7fOdJY06KmE5GwipjIR0if69bqhTqyPf1tKJIt-0VlNMD7nfMA-vb9ImRHoLPv771gZbT84W4dIVKuhMB8-1TjQSW-LTKn5Cae56ifOPVxXmN0p8FkDL2CPVi4Im3nw5DrnDj7FgJQgp0Ql6w5di.NCjdbFfwveouzImxettTCg");

            HttpEntity<CreateFusionAccountRequest> httpEntity = new HttpEntity<>(request, headers);
            CreateFusionAccountResponse response = restTemplate.postForObject(createUserUrl, httpEntity, CreateFusionAccountResponse.class);
            System.out.println("Account Created");
            return response;
        } catch (Exception e) {
            System.out.println(e);
            throw new BadRequestException("Exception in creating FUSION account");
        }

    }


    public IssueResponse issueBundle(IssueBundleRequest issueBundleRequest) throws BadRequestException {

        try {
            HttpHeaders headers = new HttpHeaders();
            headers.set("X-Zeta-AuthToken", "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidGFnIjoia3E2R3dhNVpjXzMyd0FOU2xwdkpEQSIsImFsZyI6IkExMjhHQ01LVyIsIml2IjoiUloxUC1FSWUyRmZpM0tJNSJ9.9HiGnRWPs72xyHkz318uarugQxSVzqEksXraJ8N0zec.MEJhqMICEqUgfSrfT5tX2g.9XiRnjXxE08Lr-lh06h7RwZvtJuLdxqkcG02A1ojTGbnoKunZKfVNhQ-rJihnoltutrPQwYPalW8lxM_pnnZ9zZS6RMO-S_UM_gx5p5IFDe1IUlOH3utXWEczdYhcCrnBAXKXAzRCnjh_-Av_RAWi33wZOfcMQrVh3IjAUMtO_R18tK6oekDRt2ivHT9vJ-k0w0iHxnfvLhzjBvKpFPkkuqCj6V9jMEwnjUAB4hIlLPB7fOdJY06KmE5GwipjIR0if69bqhTqyPf1tKJIt-0VlNMD7nfMA-vb9ImRHoLPv771gZbT84W4dIVKuhMB8-1TjQSW-LTKn5Cae56ifOPVxXmN0p8FkDL2CPVi4Im3nw5DrnDj7FgJQgp0Ql6w5di.NCjdbFfwveouzImxettTCg");

            HttpEntity<IssueBundleRequest> httpEntity = new HttpEntity<>(issueBundleRequest, headers);
            IssueResponse response = restTemplate.postForObject(issueBundleRequestUrl, httpEntity, IssueResponse.class);
            System.out.println("Bundle Created");
            return response;
        } catch (Exception e) {
            System.out.println(e);
            throw new BadRequestException("Exception in issuing bundle request");
        }


    }

    public DefaultResponse transferMoney(String receiverPhoneNumber, Integer amount) throws BadRequestException{
        try {
            UserDetailsCustom loggedInUser = (UserDetailsCustom) authenticationFacade.getPrincipal();
            String senderAccountId = userRepository.findUserEntitiesByPhoneNumber(loggedInUser.getUsername()).getAccountId();

            String receiverAccountId = userRepository.findUserEntitiesByPhoneNumber(receiverPhoneNumber).getAccountId();

            HttpHeaders headers = new HttpHeaders();
            headers.set("X-Zeta-AuthToken", "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidGFnIjoia3E2R3dhNVpjXzMyd0FOU2xwdkpEQSIsImFsZyI6IkExMjhHQ01LVyIsIml2IjoiUloxUC1FSWUyRmZpM0tJNSJ9.9HiGnRWPs72xyHkz318uarugQxSVzqEksXraJ8N0zec.MEJhqMICEqUgfSrfT5tX2g.9XiRnjXxE08Lr-lh06h7RwZvtJuLdxqkcG02A1ojTGbnoKunZKfVNhQ-rJihnoltutrPQwYPalW8lxM_pnnZ9zZS6RMO-S_UM_gx5p5IFDe1IUlOH3utXWEczdYhcCrnBAXKXAzRCnjh_-Av_RAWi33wZOfcMQrVh3IjAUMtO_R18tK6oekDRt2ivHT9vJ-k0w0iHxnfvLhzjBvKpFPkkuqCj6V9jMEwnjUAB4hIlLPB7fOdJY06KmE5GwipjIR0if69bqhTqyPf1tKJIt-0VlNMD7nfMA-vb9ImRHoLPv771gZbT84W4dIVKuhMB8-1TjQSW-LTKn5Cae56ifOPVxXmN0p8FkDL2CPVi4Im3nw5DrnDj7FgJQgp0Ql6w5di.NCjdbFfwveouzImxettTCg");

            TransactionEntity transactionEntity = new TransactionEntity(UUID.randomUUID().toString(), senderAccountId, receiverAccountId, amount);
            HttpEntity<TransactionEntity> httpEntity = new HttpEntity<>(transactionEntity, headers);
            String response = restTemplate.postForObject(a2aTransactionUrl, httpEntity, String.class);
           return new DefaultResponse(new String[]{"Transaction Done"}, "200");
        } catch (Exception e) {
            System.out.println(e);
            throw new BadRequestException("Error while transferring funds");
        }
    }

    public Integer checkBalance(String accountId) throws BadRequestException{
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.set("X-Zeta-AuthToken", "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidGFnIjoia3E2R3dhNVpjXzMyd0FOU2xwdkpEQSIsImFsZyI6IkExMjhHQ01LVyIsIml2IjoiUloxUC1FSWUyRmZpM0tJNSJ9.9HiGnRWPs72xyHkz318uarugQxSVzqEksXraJ8N0zec.MEJhqMICEqUgfSrfT5tX2g.9XiRnjXxE08Lr-lh06h7RwZvtJuLdxqkcG02A1ojTGbnoKunZKfVNhQ-rJihnoltutrPQwYPalW8lxM_pnnZ9zZS6RMO-S_UM_gx5p5IFDe1IUlOH3utXWEczdYhcCrnBAXKXAzRCnjh_-Av_RAWi33wZOfcMQrVh3IjAUMtO_R18tK6oekDRt2ivHT9vJ-k0w0iHxnfvLhzjBvKpFPkkuqCj6V9jMEwnjUAB4hIlLPB7fOdJY06KmE5GwipjIR0if69bqhTqyPf1tKJIt-0VlNMD7nfMA-vb9ImRHoLPv771gZbT84W4dIVKuhMB8-1TjQSW-LTKn5Cae56ifOPVxXmN0p8FkDL2CPVi4Im3nw5DrnDj7FgJQgp0Ql6w5di.NCjdbFfwveouzImxettTCg");

            HttpEntity httpEntity = new HttpEntity(headers);

            ResponseEntity<BalanceEntity> balanceEntity = restTemplate.exchange(checkBalanceUrl + accountId + "/balance", HttpMethod.GET, httpEntity, BalanceEntity.class);
            return balanceEntity.getBody().getBalance();
        } catch (Exception e) {
            System.out.println(e);
            throw new BadRequestException("Exception in checking balance");
        }
    }

    public DefaultResponse addMoneyToAccount(String familyId, Integer amount) throws BadRequestException{
        try {

            String familyAccountId = familyRepository.findById(familyId).get().getAccountId();

            HttpHeaders headers = new HttpHeaders();
            headers.set("X-Zeta-AuthToken", "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidGFnIjoia3E2R3dhNVpjXzMyd0FOU2xwdkpEQSIsImFsZyI6IkExMjhHQ01LVyIsIml2IjoiUloxUC1FSWUyRmZpM0tJNSJ9.9HiGnRWPs72xyHkz318uarugQxSVzqEksXraJ8N0zec.MEJhqMICEqUgfSrfT5tX2g.9XiRnjXxE08Lr-lh06h7RwZvtJuLdxqkcG02A1ojTGbnoKunZKfVNhQ-rJihnoltutrPQwYPalW8lxM_pnnZ9zZS6RMO-S_UM_gx5p5IFDe1IUlOH3utXWEczdYhcCrnBAXKXAzRCnjh_-Av_RAWi33wZOfcMQrVh3IjAUMtO_R18tK6oekDRt2ivHT9vJ-k0w0iHxnfvLhzjBvKpFPkkuqCj6V9jMEwnjUAB4hIlLPB7fOdJY06KmE5GwipjIR0if69bqhTqyPf1tKJIt-0VlNMD7nfMA-vb9ImRHoLPv771gZbT84W4dIVKuhMB8-1TjQSW-LTKn5Cae56ifOPVxXmN0p8FkDL2CPVi4Im3nw5DrnDj7FgJQgp0Ql6w5di.NCjdbFfwveouzImxettTCg");

            TransactionEntity transactionEntity = new TransactionEntity(UUID.randomUUID().toString(), "7a6e890a-b511-4b70-879d-2b5c10d72005", familyAccountId, amount);
            HttpEntity<TransactionEntity> httpEntity = new HttpEntity<>(transactionEntity, headers);
            String response = restTemplate.postForObject(a2aTransactionUrl, httpEntity, String.class);
            return new DefaultResponse(new String[]{"Transaction Done"}, "200");
        } catch (Exception e) {
            System.out.println(e);
            throw new BadRequestException("Error while transferring funds");
        }
    }

}

