package org.example.jwt.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
public class AuthenticationController {

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
        Map<String, String> response = new HashMap<>();
        // Decode Basic Auth
        if (authHeader == null || !authHeader.startsWith("Basic ")) {
            response.put("token", "");
            return response;
        }
        String base64Credentials = authHeader.substring("Basic ".length());
        String credentials = new String(Base64.getDecoder().decode(base64Credentials));
        String[] values = credentials.split(":", 2);
        if(values.length < 2) {
            response.put("token", "");
            return response;
        }
        String username = values[0];
        String password = values[1];

        // Validate via Spring Security context
        // If "user" or "admin" is authenticated via basic auth, spring will set SecurityContext
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if(auth == null || !auth.isAuthenticated() || !auth.getName().equals(username)) {
            response.put("token", "");
            return response;
        }

        // Get the role(s)
        List<String> roles = new ArrayList<>();
        auth.getAuthorities().forEach(a -> roles.add(a.getAuthority()));

        // Generate JWT with username and roles
        String token = Jwts.builder()
                .setSubject(username)
                .claim("roles", roles)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 20 * 60 * 1000)) // 20 min
                .signWith(SignatureAlgorithm.HS256, "secretkey")
                .compact();
        response.put("token", token);
        return response;
    }
}
