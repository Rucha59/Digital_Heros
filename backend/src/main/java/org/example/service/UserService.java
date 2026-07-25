package org.example.service;

import org.example.dto.LoginRequest;
import org.example.dto.LoginResponse;

public interface UserService {
    LoginResponse login(LoginRequest request);
}
