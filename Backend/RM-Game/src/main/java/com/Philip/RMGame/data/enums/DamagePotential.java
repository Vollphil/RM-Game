package com.Philip.RMGame.data.enums;

public enum DamagePotential {
    ONE(74500000),
    TWO(8500000),
    THREE(8500000),
    FOUR(74500000),
    FIVE(500000),
    SIX(59000000),
    SEVEN(500000),
    EIGHT(200000),
    NINE(200000),
    TEN(59000000),
    ELEVEN(9500000),
    TWELVE(900000),
    THIRTEEN(1000000),
    FOURTEEN(300000),
    FIFTEEN(200000),
    SIXTEEN(500000),
    SEVENTEEN(12000000),
    EIGHTEEN(6000000),
    NINETEEN(2000000),
    TWENTY(1500000);
    private final int value;

    DamagePotential(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
