package com.Philip.RMGame.data.enums;

public enum RecommendationDetail {

    SPRINKLER_IN_STOCK("Sprinkler in Stock"),
    SPRINKLER_IN_ADMINISTRATION_BUILDING("Sprinkler in Administration Building"),
    REDUCTION_OF_INTERIM("Reduction of interim storage at test facilities"),
    APPOINTMENT_TRAINING_SPRINKLER_WARDEN(
            "Appointment & training for the function of sprinkler warden"),
    INSTALLATION_OF_SHELFSPRINKLERS(
            "Installation of shelf sprinklers in storage"),
    ENFORCMENT_SMOKING_BAN(
            "enforcement of smoking bans"),
    TRAINING_FIREFIGHTING("Training firefighting for emergency group"),
    INSTALLATION_OF_ANTITHEFT("Installation of electronic anti-burglary devices"),
    INSTALLATION_HOES_BOXES(
            "Installation of additional hose boxes"),
    INSTALLATION_SECOND_WATERPUMP(
            "Installation of a second fire water pump"),
    INSTALLATION_SPRINKLER(
            "Installation of a sprinkler system "),
    INSTALLATION_OF_FIREWALL(
            "Installation of fire protection wall between production and warehouse"),
    SAFTEY_CONTAINER_FLAMMABLE("Safety container for flammable liquids"),
    INSTALLATION_EQUIPOTENTIAL_BONDING(
            "Installation of equipotential bonding on the printing presses"),
    ABOVE_FLOOR("Storage of finished goods 15 cm above floor level"),
    WAREHOUSE_SPRINKLER(
            "Warehouse sprinkler"),
    ADDITIONAL_WATERLINE(
            "Additional extinguishing water line to the public network"),
    HYDRAULICPUMP_SHUTDOWN(
            "Automatic shutdown of the hydraulic pumps"),
    MODERNIZATION_CONTROLS(
            "Modernization of the process controls of the furnaces"),
    MAINTENANCE_UPKEEP(
            "Maintenance and upkeep program for key machines");

    private final String value;


    RecommendationDetail(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
