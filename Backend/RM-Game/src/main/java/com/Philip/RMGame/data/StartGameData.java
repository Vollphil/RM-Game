package com.Philip.RMGame.data;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StartGameData {
    private int rounds;
    private String playerName;
    private int startingMoney;
    private  int recommendationNumber;
}
