package org.example.dto;

public record LoginResponse(Long userId, String username, String role, String token) {
}
