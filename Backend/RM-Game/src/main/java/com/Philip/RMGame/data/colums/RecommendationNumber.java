package com.Philip.RMGame.data.colums;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class RecommendationNumber {

    @Id
    @GeneratedValue
    private Long id;
    private int recommendationNumber;

}
