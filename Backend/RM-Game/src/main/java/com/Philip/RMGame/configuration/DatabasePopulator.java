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
            List<Integer> recommendationNumbers = new ArrayList<>();
            for (int i = 1; i < 5; i++) {

                recommendationNumbers.add(i);
            }
            //HPR

            List<Boolean> hprList = new ArrayList<>();
            for (int i = 0; i < 2; i++) {
                boolean hpr = true;
                hprList.add(hpr);
            }
            for (int i = 0; i < 2; i++) {
                boolean hpr = false;
                hprList.add(hpr);
            }

            //RecommendationDetail

            List<String> recommendationDetailList = new ArrayList<>();
            RecommendationDetail[] allValues = RecommendationDetail.values();

            //DamagePotential
            List<Long> damagePotentialList = new ArrayList<>();
            DamagePotential[] allDamagePotentialValues = DamagePotential.values();

            //Price
            List<Integer> priceList = new ArrayList<>();
            Price[] allPrices = Price.values();
            //ImplementationTime
            List<String> implementationTimeList = new ArrayList<>();
            ImplementationTime[] wholeImplementationTime = ImplementationTime.values();

            for (int i = 0; i < 4; i++) {
                //RecommendationDetail

                recommendationDetailList.add(allValues[i].getValue());

                //DamagePotential

                damagePotentialList.add( allDamagePotentialValues[i].getValue());
                //Price

                priceList.add(allPrices[i].getValue());
                //ImplementationTime

                implementationTimeList.add(wholeImplementationTime[i].getValue());

            }


            ComputerCompany computerCompany = ComputerCompany.builder()
                    .companyName(CompanyName.COMPUTER)
                    .recommendationNumber(recommendationNumbers)
                    .hpr(hprList)
                    .recommendationDetails(recommendationDetailList)
                    .damagePotential(damagePotentialList)
                    .prices(priceList)
                    .implementationTime(implementationTimeList)
                    .annualBonus(AnnualBonus.COMPUTER.getValue())
                    .hprBonus(HPRBonus.COMPUTER.getValue())
                    .build();
            computerCompanyRepository.save(computerCompany);
        };
    }
}
