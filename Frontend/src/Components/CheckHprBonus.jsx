const CheckHprBonus = (checkBox) =>{
    let hprBonusMoney = 0;
    if (checkBox.current[0].checked && checkBox.current[1].checked) {
        hprBonusMoney = 55000;
        console.log("Hpr bonus 55000")

    } else if (checkBox.current[4].checked && checkBox.current[8].checked) {
        console.log("hpr bonus 40000")
        hprBonusMoney = 50000;
    } else if (checkBox.current[10].checked) {
        console.log("hpr bonus 20000")
        hprBonusMoney= 20000;
    } else if (checkBox.current[16].checked) {
        console.log("hpr bonus 20000")
        hprBonusMoney = 20000;
    } else if (checkBox.current[17].checked && checkBox.current[18].checked) {
        console.log("hpr bonus 7000")
        hprBonusMoney = 7000;
    } else {
        console.log("no hpr bonus")
        hprBonusMoney = null;
    }
    return hprBonusMoney;
}
export default CheckHprBonus;