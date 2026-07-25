package org.example.dto;

import jakarta.validation.constraints.NotNull;
import org.example.entity.LeadStatus;

public record LeadStatusUpdateRequest(@NotNull LeadStatus status) {
}
