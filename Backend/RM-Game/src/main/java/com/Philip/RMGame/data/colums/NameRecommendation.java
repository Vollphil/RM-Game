package com.Philip.RMGame.data.colums;

import com.Philip.RMGame.data.enums.RecommendationDetail;
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
public class NameRecommendation {
    @Id
    @GeneratedValue
private Long id;
private RecommendationDetail recommendationDetail;
}
