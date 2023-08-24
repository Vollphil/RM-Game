package com.Philip.RMGame.data.enums;

public enum CompanyName {

COMPUTER("Computer"),
LAGER("Stock"),
DURCKEREI("Printing hall"),
WERKZEUGE("Tools"),
METALL("Metal");

    final private String value;

    CompanyName(String value) {
        this.value = value;
    }
public String getValue(){
return value;
}
}
