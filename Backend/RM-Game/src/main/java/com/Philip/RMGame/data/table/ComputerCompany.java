package com.Philip.RMGame.data.table;

import com.Philip.RMGame.data.*;
import com.Philip.RMGame.data.enums.CompanyName;
import com.Philip.RMGame.data.enums.RecommendationDetail;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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
    @OneToMany
    private List<RecommendationNumber> recommendationNumber;
    @OneToMany
    private List<HPR> hpr;
    private List<RecommendationDetail> recommendationDetails;
    @OneToMany
    private List<DamagePotential> damagePotential;
    @OneToMany
    private List<Price> prices;
    @OneToMany
    private List<ImplementationTime> implementationTime;
    @OneToMany
    private List<AnnualBonus> annualBonuses;
    @OneToMany
    private List<HPRBonus> hprBonuses;


}
