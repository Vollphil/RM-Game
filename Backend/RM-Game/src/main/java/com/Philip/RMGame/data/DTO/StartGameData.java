package com.Philip.RMGame.data.DTO;

import com.Philip.RMGame.data.Company;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StartGameData {
    private int rounds;
    private String company;
}
