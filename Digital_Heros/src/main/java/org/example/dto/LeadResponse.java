package org.example.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import org.example.entity.LeadStatus;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class LeadResponse {
    private Long id;
    private String name;
    private String email;
    private String budget;
    private String message;
    private LeadStatus status;
    private LocalDateTime createdAt;
}
