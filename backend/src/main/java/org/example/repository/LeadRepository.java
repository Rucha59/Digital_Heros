package org.example.repository;

import org.example.entity.Lead;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LeadRepository extends JpaRepository<Lead, Long> {

    @Query("""
            SELECT lead FROM Lead lead
            WHERE :search IS NULL OR :search = ''
               OR LOWER(lead.name) LIKE LOWER(CONCAT('%', :search, '%'))
               OR LOWER(lead.email) LIKE LOWER(CONCAT('%', :search, '%'))
               OR LOWER(lead.budget) LIKE LOWER(CONCAT('%', :search, '%'))
               OR LOWER(lead.message) LIKE LOWER(CONCAT('%', :search, '%'))
            ORDER BY lead.createdAt DESC
            """)
    List<Lead> search(@Param("search") String search);
}
