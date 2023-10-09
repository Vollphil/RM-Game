import {useContext, useEffect, useRef, useState} from "react";
import "./SummaryTable.css"
import PlayerContext from "../../PlayerContext";


const SummaryTable = ({setGameData}) => {
    const [boughtRecommendations, setBoughtRecommendations] = useState([]);

    const {playerMoney, setPlayerMoney, playerId, playerName} = useContext(PlayerContext);
    const [isChecked, setIsChecked] = useState(true);
    const buttonRef = useRef(null);
    const hprCheckBox = useRef([]);
    const [localGameData, setLocalGameData] = useState(null);

    useEffect(() => {
        hprCheckBox.current = hprCheckBox.current.slice(0, 8);
    }, []);


    const chooseRecommendation = async () => {
        try {
            const response = await fetch(`http://localhost:8080/game/playRound/${playerName}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({cash: playerMoney})
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);

            }
            const data = await response.json();
            setLocalGameData(data);
            setGameData(data);
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error.message);
        }
    }

    const handleCheckboxChange = (e, recommendationId, value) => {

        const checkbox = e.target;
        const row = checkbox.closest('tr');
        buttonRef.current.disabled = false;
        setIsChecked(prevState => !prevState);
        let newPlayerMoney = playerMoney - (checkbox.checked ? value : -value);
        if (checkbox.checked) {
            setBoughtRecommendations(prev => [...prev, recommendationId]);
        } else {
            setBoughtRecommendations(prev => prev.filter(item => item !== recommendationId));
        }
        setPlayerMoney(newPlayerMoney);

        if (checkbox.checked && newPlayerMoney <= 0) {
            if (!row.classList.contains('table-group-divider')) {
                row.className = 'bg-danger text-white';
                buttonRef.current.disabled = true;
                console.log(row.className)
            } else {
                row.className = 'table-group-divider bg-danger text-white';
                buttonRef.current.disabled = true;
                console.log(row.className)
            }

        } else if (checkbox.checked && newPlayerMoney >= 0) {
            if (!row.classList.contains('table-group-divider')) {
                row.className = 'bg-success text-white';
                console.log(row.className + "1")
            } else {
                row.className = 'table-group-divider bg-success text-white';
                console.log(row.className)
            }


        } else {
            if (!row.classList.contains('table-group-divider')) {
                row.className = '';
            } else {
                row.className = 'table-group-divider';
            }

        }


    };

    const checkHprBonus = () => {
        if (hprCheckBox.current[0].checked && hprCheckBox.current[1].checked) {
            console.log("Hpr bonus 55000")

        } else if (hprCheckBox.current[2].checked && hprCheckBox.current[3].checked) {
            console.log("hpr bonus 40000")
        } else if (hprCheckBox.current[4].checked) {
            console.log("hpr bonus 20000")
        } else if (hprCheckBox.current[5].checked) {
            console.log("hpr bonus 20000")
        } else if (hprCheckBox.current[6].checked && hprCheckBox.current[7].checked) {
            console.log("hpr bonus 7000")
        } else {
            console.log("no hpr bonus")
        }

    }

    const checkCheckboxes = () => {


        for (let i = 0; i < hprCheckBox.current.length; i++) {
            const checkbox = hprCheckBox.current[i];
            const row = checkbox.closest('tr');
            const tdElements = Array.from(row.children);
            if (checkbox.checked) {
                row.classList.remove('bg-success', 'text-white');
                for (let j = 1; j < 7; j++) {
                    tdElements[j].className = 'text-decoration-line-through';
                }
                checkbox.disabled = true;
            }
        }
    }

    return (
        <div>

            <div class="d-grid gap-2 mt-5">
                <button className="btn btn-primary" type="button" ref={buttonRef}
                        onClick={() => checkCheckboxes()}>Submit your choices
                </button>
            </div>
            {localGameData ? (<div>
                <p>Do you want to save your choices ?</p>
                <p>HPR Bonus this round :</p>
                <p>Money left when you Submit: {playerMoney}</p>
                <button onClick={() => chooseRecommendation()}>Submit</button>
                <button onClick={() => setLocalGameData(null)}>Cancel</button>
            </div>) : (


                <div className="table-responsive-sm fs-6">
                    <table className="table table-sm table align-middle">
                        <thead>
                        Recommendat
                        <tr>
                            <th scope="col">Company</th>
                            <th scope="col">Recommendation Number</th>
                            <th scope="col">HPR</th>
                            <th scope="col">Recommendation</th>
                            <th scope="col">Damage potential</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Implementation time</th>
                            <th scope="col">Annual Bonus</th>
                            <th scope="col">HPR Bonus</th>
                        </tr>
                        </thead>
                        <tbody className="table-group-divider">
                        <tr>

                        </tr>
                        <tr>
                            <th>Computer</th>

                            <td>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="inlineCheckbox1"
                                        value="28000"
                                        ref={(el) => (hprCheckBox.current[0] = el)}
                                        onChange={(e) => handleCheckboxChange(e, 1, 28000)}/>

                                </div>
                                1
                            </td>
                            <td>*</td>
                            <td>Sprinkler in Stock</td>
                            <td>74500000</td>
                            <td>28000</td>
                            <td>7 Mo</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>
                                <div className="form-check form-check-inline ">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
                                           value="70000" ref={(el) => (hprCheckBox.current[1] = el)}
                                           onChange={(e) => handleCheckboxChange(e, 2, 7000)}/>

                                </div>
                                2
                            </td>
                            <td>*</td>
                            <td>Sprinkler in Administration Building</td>
                            <td>8 500 000</td>
                            <td>70000</td>
                            <td>13 Mo</td>
                            <td>150 000</td>
                            <td> 55 000</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3"
                                           ref={(el) => (hprCheckBox.current[2] = el)} value="10000"
                                           onChange={(e) => handleCheckboxChange(e, 3, 10000)}/>

                                </div>

                                3
                            </td>
                            <td></td>
                            <td>Reduction of interim storage at test facilities</td>
                            <td>8 500 000</td>
                            <td> 10000</td>
                            <td> 1 Mo</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox4"
                                           ref={(el) => (hprCheckBox.current[3] = el)} value="4000"
                                           onChange={(e) => handleCheckboxChange(e, 4, 4000)}/>

                                </div>
                                4
                            </td>
                            <td></td>
                            <td>Appointment & training for the function of sprinkler warden</td>
                            <td>74 500 000</td>
                            <td> 4000</td>
                            <td> 1 Mo</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="table-group-divider">
                            <th scope="row">Stock</th>
                            <td>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox5"
                                           value="28000" ref={(el) => (hprCheckBox.current[4] = el)}
                                           onChange={(e) => handleCheckboxChange(e, 5, 28000)}/>

                                </div>
                                5
                            </td>
                            <td>*</td>
                            <td>Installation of shelf sprinklers in storage</td>
                            <td>500 000</td>
                            <td> 28000</td>
                            <td> 2 Mo</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox6"
                                           ref={(el) => (hprCheckBox.current[5] = el)} value="7000"
                                           onChange={(e) => handleCheckboxChange(e, 6, 7000)}/>

                                </div>

                                6
                            </td>
                            <td></td>
                            <td>Enforcement of smoking bans</td>
                            <td>59 000 000</td>
                            <td> 7000</td>
                            <td> 1 Mo</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox7"
                                           ref={(el) => (hprCheckBox.current[6] = el)} value="19000"
                                           onChange={(e) => handleCheckboxChange(e, 7, 19000)}/>

                                </div>
                                7
                            </td>
                            <td></td>
                            <td>Training firefighting for emergency group</td>
                            <td>500 000</td>
                            <td> 19000</td>
                            <td> 1 Mo</td>
                            <td>140 000</td>
                            <td> 40 000</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox8"
                                           value="15000" ref={(el) => (hprCheckBox.current[7] = el)}
                                           onChange={(e) => handleCheckboxChange(e, 8, 15000)}/>

                                </div>
                                8
                            </td>
                            <td></td>
                            <td>Installation of electronic anti-burglary devices</td>
                            <td>200 000</td>
                            <td> 15000</td>
                            <td> 3 Mo</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox9"
                                           value="10000" ref={(el) => (hprCheckBox.current[8] = el)}
                                           onChange={(e) => handleCheckboxChange(e, 9, 10000)}/>

                                </div>
                                9
                            </td>
                            <td>*</td>
                            <td>Installation of additional hose boxes</td>
                            <td>2 000 000</td>
                            <td> 10000</td>
                            <td> 2 Mo</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox10"
                                           value="60000" ref={(el) => (hprCheckBox.current[9] = el)}
                                           onChange={(e) => handleCheckboxChange(e, 10, 60000)}/>

                                </div>
                                10
                            </td>
                            <td></td>
                            <td>Installation of a second fire water pump</td>
                            <td> 59 000 000</td>
                            <td> 60000</td>
                            <td> 3 Mo</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="table-group-divider">
                            <th scope="row">Printing hall</th>
                            <td>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox11"
                                           value="100000" ref={(el) => (hprCheckBox.current[10] = el)}
                                           onChange={(e) => handleCheckboxChange(e, 11, 100000)}/>

                                </div>

                                11
                            </td>
                            <td>*</td>
                            <td>Installation of a sprinkler system</td>
                            <td> 9 500 000</td>
                            <td> 100000</td>
                            <td> 15 Mo</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox12"
                                           value="48000" ref={(el) => (hprCheckBox.current[11] = el)}
                                           onChange={(e) => handleCheckboxChange(e, 12, 48000)}/>

                                </div>

                                12
                            </td>
                            <td></td>
                            <td>Installation of fire protection wall between production and warehouse</td>
                            <td> 900 000</td>
                            <td> 48000</td>
                            <td> 9 Mo</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox13"
                                           value="4000" ref={(el) => (hprCheckBox.current[12] = el)}
                                           onChange={(e) => handleCheckboxChange(e, 13, 4000)}/>

                                </div>
                                13
                            </td>
                            <td></td>
                            <td>Safety container for flammable liquids</td>
                            <td> 1 000 000</td>
                            <td> 4000</td>
                            <td> 1 Mo</td>
                            <td>90 000</td>
                            <td>20 000</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox14"
                                           value="7000" ref={(el) => (hprCheckBox.current[13] = el)}
                                           onChange={(e) => handleCheckboxChange(e, 14, 7000)}/>

                                </div>
                                14
                            </td>
                            <td></td>
                            <td>Installation of equipotential bonding on the printing presses</td>
                            <td> 300 000</td>
                            <td> 7000</td>
                            <td> 3 Mo</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox15"
                                           value="13000" ref={(el) => (hprCheckBox.current[14] = el)}
                                           onChange={(e) => handleCheckboxChange(e, 15, 13000)}/>

                                </div>
                                15
                            </td>
                            <td></td>
                            <td>Storage of finished goods 15 cm above floor level</td>
                            <td> 200 000</td>
                            <td> 13000</td>
                            <td> 2 Mo</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="table-group-divider">
                            <th scope="row">Tools</th>
                            <td>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox16"
                                           value="10000" ref={(el) => (hprCheckBox.current[15] = el)}
                                           onChange={(e) => handleCheckboxChange(e, 16, 10000)}/>

                                </div>
                                16
                            </td>
                            <td></td>
                            <td>Warehouse sprinkler</td>
                            <td> 500 000</td>
                            <td> 10000</td>
                            <td> 4 Mo</td>
                            <td>50 000</td>
                            <td>20 000</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox17"
                                           value="38000" ref={(el) => (hprCheckBox.current[16] = el)}
                                           onChange={(e) => handleCheckboxChange(e, 17, 38000)}/>

                                </div>
                                17
                            </td>
                            <td>*</td>
                            <td>Additional extinguishing water line to the public network</td>
                            <td> 12 000 000</td>
                            <td> 38000</td>
                            <td> 8 Mo</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="table-group-divider">
                            <th scope="row">Metal</th>
                            <td>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox18"
                                           value="10000" ref={(el) => (hprCheckBox.current[17] = el)}
                                           onChange={(e) => handleCheckboxChange(e, 18, 10000)}/>

                                </div>
                                18
                            </td>
                            <td>*</td>
                            <td>Automatic shutdown of the hydraulic pumps</td>
                            <td> 6 000 000</td>
                            <td> 10000</td>
                            <td> 3 Mo</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox19"
                                           value="25000" ref={(el) => (hprCheckBox.current[18] = el)}
                                           onChange={(e) => handleCheckboxChange(e, 19, 25000)}/>

                                </div>
                                19
                            </td>
                            <td>*</td>
                            <td>Modernization of the process controls of the furnaces</td>
                            <td> 2 000 000</td>
                            <td> 25000</td>
                            <td> 3 Mo</td>
                            <td>25 000</td>
                            <td>7 000</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox20"
                                           value="9000" ref={(el) => (hprCheckBox.current[19] = el)}
                                           onChange={(e) => handleCheckboxChange(e, 20, 9000)}/>

                                </div>
                                20
                            </td>
                            <td></td>
                            <td>Maintenance and upkeep program for key machines</td>
                            <td> 1 500 000</td>
                            <td> 9000</td>
                            <td> 6 Mo</td>
                            <td></td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default SummaryTable;