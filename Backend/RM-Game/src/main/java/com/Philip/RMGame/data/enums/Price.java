package com.Philip.RMGame.data.enums;

public enum Price {

    ONE(28000),
    TWO(70000),
    THREE(10000),
    FOUR(4000),
    FIVE(28000),
    SIX(7000),
    SEVEN(19000),
    EIGHT(15000),
    NINE(10000),
    TEN(60000),
    ELEVEN(100000),
    TWELVE(48000),
    THIRTEEN(4000),
    FOURTEEN(7000),
    FIFTEEN(13000),
    SIXTEEN(10000),
    SEVENTEEN(38000),
    EIGHTEEN(10000),
    NINETEEN(25000),
    TWENTY(9000);

    private final int value;

    Price(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
