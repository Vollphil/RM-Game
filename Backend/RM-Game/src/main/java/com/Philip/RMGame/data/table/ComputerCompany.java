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

    @JsonManagedReference
    @OneToMany( cascade = CascadeType.ALL)
    private List<RecommendationNumber> recommendationNumber;

    @JsonManagedReference
    @OneToMany( cascade = CascadeType.ALL)
    private List<HPR> hpr;
    private List<RecommendationDetail> recommendationDetails;

    private List<DamagePotential> damagePotential;

    private List<Price> prices;

    private List<ImplementationTime> implementationTime;

    private AnnualBonus annualBonus;

    private HPRBonus hprBonus;


}
