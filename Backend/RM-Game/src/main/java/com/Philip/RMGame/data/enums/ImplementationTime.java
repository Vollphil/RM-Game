package com.Philip.RMGame.data.enums;

public enum ImplementationTime {

    ONE("7.Mo"),
    TWO("13.Mo"),
    THREE("1.Mo"),
    FOUR("1.Mo"),
    FIVE("2.Mo"),
    SIX("1.Mo"),
    SEVEN("1.Mo"),
    AIGHT("3.Mo"),
    NINE("2.Mo"),
    TEN("3.Mo"),
    ELEVEN("15.Mo"),
    TWELVE("9.Mo"),
    TIRTHTEEN("1.Mo"),
    FOURTEEN("3.Mo"),
    FIFTEEN("2.Mo"),
    SIXTEEN("4.Mo"),
    SEVENTEEN("8.Mo"),
    AIGHTTEEN("3.Mo"),
    NINETEEN("3.Mo"),
    TWENTY("6.Mo");



    private final String value;

    ImplementationTime(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
