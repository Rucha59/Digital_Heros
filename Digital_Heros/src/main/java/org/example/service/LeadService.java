package org.example.service;

import org.example.dto.LeadRequest;
import org.example.dto.LeadResponse;
import org.example.entity.LeadStatus;

import java.util.List;

public interface LeadService {
    LeadResponse createLead(LeadRequest request);

    List<LeadResponse> getLeads(String search);

    LeadResponse updateStatus(Long leadId, LeadStatus status);
}
