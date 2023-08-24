package com.Philip.RMGame.configuration;

import com.Philip.RMGame.Repository.ComputerCompanyRepository;
import com.Philip.RMGame.Repository.GameRepository;
import com.Philip.RMGame.data.colums.HPR;
import com.Philip.RMGame.data.colums.RecommendationNumber;
import com.Philip.RMGame.data.enums.*;
import com.Philip.RMGame.data.table.ComputerCompany;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Configuration
public class DatabasePopulator {
    @Bean
    ApplicationRunner populator(ComputerCompanyRepository computerCompanyRepository) {
        return args -> {
            //RecommendationNumber
            List<RecommendationNumber> recommendationNumbers = new ArrayList<>();
            for (int i = 1; i < 5; i++) {
                RecommendationNumber recommendationNumber = RecommendationNumber.builder().recommendationNumber(i).build();
                recommendationNumbers.add(recommendationNumber);
            }
            //HPR

            List<HPR> hprList = new ArrayList<>();
            for (int i = 0; i < 2; i++) {
                HPR hpr = HPR.builder().isHpr(true).build();
                hprList.add(hpr);
            }
            for (int i = 0; i < 2; i++) {
                HPR hpr = HPR.builder().isHpr(false).build();
                hprList.add(hpr);
            }

            //RecommendationDetail

            List<RecommendationDetail> recommendationDetailList = new ArrayList<>();
            RecommendationDetail[] allValues = RecommendationDetail.values();

            //DamagePotential
            List<DamagePotential> damagePotentialList = new ArrayList<>();
            DamagePotential[] allDamagePotentialValues = DamagePotential.values();

            //Price
            List<Price> priceList = new ArrayList<>();
            Price[] allPrices = Price.values();
            //ImplementationTime
            List<ImplementationTime> implementationTimeList = new ArrayList<>();
            ImplementationTime[] wholeImplementationTime = ImplementationTime.values();

            for (int i = 0; i < 4; i++) {
                //RecommendationDetail
                RecommendationDetail detail = allValues[i];
                recommendationDetailList.add(detail);

                //DamagePotential
                DamagePotential potential = allDamagePotentialValues[i];
                damagePotentialList.add(potential);
                //Price
                Price price = allPrices[i];
                priceList.add(price);
                //ImplementationTime
                ImplementationTime implementationTime = wholeImplementationTime[i];
                implementationTimeList.add(implementationTime);

            }


            ComputerCompany computerCompany = ComputerCompany.builder()
                    .companyName(CompanyName.COMPUTER)
                    .recommendationNumber(recommendationNumbers)
                    .recommendationDetails(recommendationDetailList)
                    .damagePotential(damagePotentialList)
                    .prices(priceList)
                    .implementationTime(implementationTimeList)
                    .annualBonus(AnnualBonus.COMPUTER)
                    .hprBonus(HPRBonus.COMPUTER)
                    .build();
            computerCompanyRepository.save(computerCompany);
        };
    }
}
