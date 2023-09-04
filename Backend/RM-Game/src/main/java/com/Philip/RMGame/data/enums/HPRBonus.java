package com.Philip.RMGame.data.enums;

public enum HPRBonus {

    COMPUTER(55000),
    STOCK(40000),
    PRINT_HOUSE(27000),
    TOOLS(20000),
    METAL(7000);

    private final long value;

    HPRBonus(long value) {
        this.value = value;
    }

    public long getValue() {
        return value;
    }
}
