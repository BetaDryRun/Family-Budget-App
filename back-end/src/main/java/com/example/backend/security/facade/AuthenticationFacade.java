package com.example.backend.security.facade;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

@Component
public class AuthenticationFacade implements IAuthenticationFacade {

    @Override
    public Authentication getAuthentication() {
        return SecurityContextHolder.getContext().getAuthentication();
    }

    @Override
    public UserDetails getPrincipal() {
        if (isLoggedIn()) {
            return (UserDetails) getAuthentication().getPrincipal();
        }
        return null;
    }

    @Override
    public boolean isLoggedIn() {
        return getAuthentication().getPrincipal() instanceof UserDetails;
    }
}
