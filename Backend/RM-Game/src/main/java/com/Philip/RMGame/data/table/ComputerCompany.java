package com.Philip.RMGame.data.table;

import com.Philip.RMGame.data.colums.*;
import com.Philip.RMGame.data.enums.*;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class ComputerCompany {
    @Id
    @GeneratedValue
    private Long id;
    private CompanyName companyName;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<Integer> recommendationNumber;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<Boolean> hpr;
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> recommendationDetails;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<Long> damagePotential;
    @ElementCollection(fetch = FetchType.EAGER)
    private List<Integer> prices;
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> implementationTime;

    private long annualBonus;

    private Long hprBonus;


}
