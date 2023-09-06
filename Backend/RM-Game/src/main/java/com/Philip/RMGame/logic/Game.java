package com.Philip.RMGame.logic;

import com.Philip.RMGame.data.Player;
import com.Philip.RMGame.data.table.ComputerCompany;
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
    private int recommendationNumber;
    @OneToOne

    private Player player;






}
