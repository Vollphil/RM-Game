package com.Philip.RMGame.data.enums;

public enum AnnualBonus {
    COMPUTER(150000),
    STOCK(140000),
    PRINT_HOUSE(90000),
    TOOLS(50000),
    METAL(25000);

    private final long value;

    AnnualBonus(long value) {
        this.value = value;
    }

    public long getValue() {
        return value;
    }
}
