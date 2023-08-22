package com.Philip.RMGame.logic;

import com.Philip.RMGame.data.Company;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Game {
@Id
    @GeneratedValue
    private Long id;
private int rounds;
private int currentRound;
private int cash;

@OneToOne
private Company company;


}
