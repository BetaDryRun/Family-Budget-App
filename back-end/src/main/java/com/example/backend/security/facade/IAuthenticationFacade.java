package com.example.backend.security.facade;

import com.example.backend.security.models.UserDetailsCustom;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;

public interface IAuthenticationFacade {
    Authentication getAuthentication();
    UserDetails getPrincipal();
    boolean isLoggedIn();
}
