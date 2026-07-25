package org.example.service;

import org.example.dto.LeadRequest;
import org.example.dto.LeadResponse;
import org.example.entity.Lead;
import org.example.entity.LeadStatus;
import org.example.exception.ResourceNotFoundException;
import org.example.repository.LeadRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class LeadServiceImpl implements LeadService {

    private final LeadRepository leadRepository;

    public LeadServiceImpl(LeadRepository leadRepository) {
        this.leadRepository = leadRepository;
    }

    @Override
    public LeadResponse createLead(LeadRequest request) {
        Lead lead = new Lead(request.getName(), request.getEmail(), request.getBudget(), request.getMessage());
        return toResponse(leadRepository.save(lead));
    }

    @Override
    @Transactional(readOnly = true)
    public List<LeadResponse> getLeads(String search) {
        String normalizedSearch = search == null ? null : search.trim();
        return leadRepository.search(normalizedSearch).stream().map(this::toResponse).toList();
    }

    @Override
    public LeadResponse updateStatus(Long leadId, LeadStatus status) {
        if (status == null) {
            throw new IllegalArgumentException("Lead status must not be null");
        }
        Lead lead = leadRepository.findById(leadId)
                .orElseThrow(() -> new ResourceNotFoundException("Lead not found: " + leadId));
        lead.setStatus(status);
        return toResponse(leadRepository.save(lead));
    }

    private LeadResponse toResponse(Lead lead) {
        return new LeadResponse(lead.getId(), lead.getName(), lead.getEmail(), lead.getBudget(),
                lead.getMessage(), lead.getStatus(), lead.getCreatedAt());
    }
}
