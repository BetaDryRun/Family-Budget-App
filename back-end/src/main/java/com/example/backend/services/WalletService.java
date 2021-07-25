package com.example.backend.services;

import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class WalletService {

    private HashMap<String,Long> walletRepository = new HashMap<>();

    public boolean createWallet(String id) {

        walletRepository.put(id, 0L);
        return true;
    }

    public boolean deleteWallet(String phoneNumber) {


        // TODO: Show Error if balance present
        walletRepository.remove(phoneNumber);
        return true;
    }
}
