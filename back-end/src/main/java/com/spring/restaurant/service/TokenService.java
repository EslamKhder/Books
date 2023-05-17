package com.spring.restaurant.service;

import com.auth0.jwt.JWT;
import com.spring.restaurant.deo.UserDataRepository;
import com.spring.restaurant.deo.UserRepository;
import com.spring.restaurant.dto.JwtLogin;
import com.spring.restaurant.dto.JwtProperties;
import com.spring.restaurant.dto.LoginResponse;
import com.spring.restaurant.dto.UserPrincipal;
import com.spring.restaurant.model.User;
import com.spring.restaurant.model.UserData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Date;

import static com.auth0.jwt.algorithms.Algorithm.HMAC512;

@Service
public class TokenService {
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserDataRepository userDataRepository;


    @Autowired
    public TokenService(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }
    private String generateToken(Authentication authResult) {

        // Grab principal
        UserPrincipal principal = (UserPrincipal) authResult.getPrincipal();
        System.out.println(principal.getUsername());

        // Create JWT Token
        String token = JWT.create()
                .withSubject(principal.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + JwtProperties.EXPIRATION_TIME))
                .sign(HMAC512(JwtProperties.SECRET.getBytes()));
        return token;
    }

    public LoginResponse login(JwtLogin jwtLogin) {
        Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(jwtLogin.getEmail(),
                jwtLogin.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authenticate);
        String token = generateToken(authenticate);
        User user = userRepository.findByEmail(jwtLogin.getEmail());
        UserData userData = userDataRepository.findByEmail(jwtLogin.getEmail());
        return new LoginResponse(jwtLogin.getEmail(),token,user.getAdmin(),userData.getFirstName()+" "+userData.getFourthName(),userData.getPhone(),userData.getStreet());
    }
}
