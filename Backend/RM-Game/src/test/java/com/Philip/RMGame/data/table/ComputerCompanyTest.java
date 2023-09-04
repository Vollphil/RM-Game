package com.Philip.RMGame.data.table;

import com.Philip.RMGame.data.enums.DamagePotential;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class ComputerCompanyTest {

    @Test
    void getDamagePotential() {
        ComputerCompany computerCompany = new ComputerCompany();
        List<Long> damagePotential = new ArrayList<>();

        DamagePotential[] allDamagePotential = DamagePotential.values();

        for(int i = 0; i < 1 ;i++) {
            damagePotential.add(allDamagePotential[i].getValue());
        }
        computerCompany.setDamagePotential(damagePotential);

        long number = 74500000;

        assertEquals(number,computerCompany.getDamagePotential().get(0));
    }
}