import {useContext, useEffect, useState} from "react";
import "./SummaryTable.css"
import PlayerContext from "../../PlayerContext";



const SummaryTable = ({setGameData}) => {
    const [recommendationNumber,setRecommendationNumber] = useState([]);
    const {difficulty}= useContext(PlayerContext);
   const chooseRecommendation = async () => {
    try{
        const response = await fetch('http://localhost:8080/game/playRound',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({recommendationNumber:recommendationNumber })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);

        }
        const data = await response.json();
       
        setGameData(data);
    }
    catch (error) {
        console.error("There was a problem with the fetch operation:", error.message);
    }
   }

   const handleCheckboxChange = (number) => {
    setRecommendationNumber(prevState => {
      if (prevState.includes(number)) {
        return prevState.filter(item => item !== number);
      } else {
        return [...prevState, number];
      }
    });
  };

    return (
        <div>
          
            <table className="table table-sm">
                <thead>
                <tr>
                    <th scope="col">Company <button onClick={() => console.log(difficulty)}></button> </th>
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
                    <th scope="row">Computer</th>

                    <td>
                        <div className="form-check form-check-inline">
  <input 
  className="form-check-input" 
  type="checkbox" 
  id="inlineCheckbox1" 
  value="1" 
  onChange={()=>handleCheckboxChange(1)}/>
  
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
                    <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="2"  onChange={()=>handleCheckboxChange(2)}/>
  
</div>
                        2</td>
                    <td>*</td>
                    <td>Sprinkler in Administration Building</td>
                    <td>8 500 000</td>
                    <td>70000</td>
                    <td>13 Mo</td>
                    <td>150 000</td>
                    <td> 55 000</td>
                </tr>
                <tr>
                    <th  scope="row"></th>
                    <td> <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="3"  onChange={()=>handleCheckboxChange(3)}/>
  
</div>
                        
                        3</td>
                    <td></td>
                    <td>Reduction of interim storage at test facilities</td>
                    <td>8 500 000</td>
                    <td> 10000</td>
                    <td> 1 Mo</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th  scope="row"></th>
                    <td>
                    <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="4"  onChange={()=>handleCheckboxChange(4)}/>
  
</div>
                        4</td>
                    <td></td>
                    <td>Appointment & training for the function of sprinkler warden</td>
                    <td>74 500 000</td>
                    <td> 4 000</td>
                    <td> 1 Mo</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className="table-group-divider">
                    <th  scope="row">Stock</th>
                    <td>
                    <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="5"  onChange={()=>handleCheckboxChange(5)}/>
 
</div>
                        5</td>
                    <td>*</td>
                    <td>Installation of shelf sprinklers in storage</td>
                    <td>500 000</td>
                    <td> 28 000</td>
                    <td> 2 Mo</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th  scope="row"></th>
                    <td> <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="6"  onChange={()=>handleCheckboxChange(6)}/>

</div>
                        
                        6</td>
                    <td></td>
                    <td>Enforcement of smoking bans</td>
                    <td>59 000 000</td>
                    <td> 7 000</td>
                    <td> 1 Mo</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th  scope="row"></th>
                    <td>
                    <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="7"  onChange={()=>handleCheckboxChange(7)}/>
 
</div>
                        7</td>
                    <td></td>
                    <td>Training firefighting for emergency group</td>
                    <td>500 000</td>
                    <td> 19 000</td>
                    <td> 1 Mo</td>
                    <td>140 000</td>
                    <td> 40 000</td>
                </tr>
                <tr>
                    <th  scope="row"></th>
                    <td>
                    <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="8"  onChange={()=>handleCheckboxChange(8)}/>
  
</div>
                        8</td>
                    <td></td>
                    <td>Installation of electronic anti-burglary devices</td>
                    <td>200 000</td>
                    <td> 15 000</td>
                    <td> 3 Mo</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th  scope="row"></th>
                    <td>
                    <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox9" value="9"  onChange={()=>handleCheckboxChange(9)}/>
 
</div>
                        9</td>
                    <td>*</td>
                    <td>Installation of additional hose boxes</td>
                    <td>2 000 000</td>
                    <td> 10 000</td>
                    <td> 2 Mo</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th  scope="row"></th>
                    <td>
                    <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox10" value="10"  onChange={()=>handleCheckboxChange(10)}/>
  
</div>
                        10</td>
                    <td></td>
                    <td>Installation of a second fire water pump</td>
                    <td> 59 000 000</td>
                    <td> 60 000</td>
                    <td> 3 Mo</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className="table-group-divider">
                    <th  scope="row">Printing hall</th>
                    <td> <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox11" value="11"  onChange={()=>handleCheckboxChange(11)}/>
  
</div>
                        
                        11</td>
                    <td>*</td>
                    <td>Installation of a sprinkler system</td>
                    <td> 9 500 000</td>
                    <td> 100 000</td>
                    <td> 15 Mo</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th  scope="row"></th>
                    <td> <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox12" value="12"  onChange={()=>handleCheckboxChange(12)}/>
  
</div>
                        
                        12</td>
                    <td></td>
                    <td>Installation of fire protection wall between production and warehouse</td>
                    <td> 900 000</td>
                    <td> 48 000</td>
                    <td> 9 Mo</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th  scope="row"></th>
                    <td>
                    <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox13" value="13"  onChange={()=>handleCheckboxChange(13)}/>
  
</div>
                        13</td>
                    <td></td>
                    <td>Safety container for flammable liquids</td>
                    <td> 1 000 000</td>
                    <td> 4 000</td>
                    <td> 1 Mo</td>
                    <td>90 000</td>
                    <td>20 000</td>
                </tr>
                <tr>
                    <th  scope="row"></th>
                    <td>
                    <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox14" value="14"  onChange={()=>handleCheckboxChange(14)}/>
  
</div>
                        14</td>
                    <td></td>
                    <td>Installation of equipotential bonding on the printing presses</td>
                    <td> 300 000</td>
                    <td> 7 000</td>
                    <td> 3 Mo</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th  scope="row"></th>
                    <td>
                    <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox15" value="15"  onChange={()=>handleCheckboxChange(15)}/>
  
</div>
                        15</td>
                    <td></td>
                    <td>Storage of finished goods 15 cm above floor level</td>
                    <td> 200 000</td>
                    <td> 13 000</td>
                    <td> 2 Mo</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className="table-group-divider">
                    <th  scope="row">Tools</th>
                    <td>
                    <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox16" value="16"  onChange={()=>handleCheckboxChange(16)}/>

</div>
                        16</td>
                    <td></td>
                    <td>Warehouse sprinkler</td>
                    <td> 500 000</td>
                    <td> 10 000</td>
                    <td> 4 Mo</td>
                    <td>50 000</td>
                    <td>20 000</td>
                </tr>
                <tr>
                    <th  scope="row"></th>
                    <td>
                    <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox17" value="17"  onChange={()=>handleCheckboxChange(17)}/>
  
</div>
                        17</td>
                    <td>*</td>
                    <td>Additional extinguishing water line to the public network</td>
                    <td> 12 000 000</td>
                    <td> 38 000</td>
                    <td> 8 Mo</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className="table-group-divider">
                    <th  scope="row">Metal</th>
                    <td>
                    <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox18" value="18"  onChange={()=>handleCheckboxChange(18)}/>
 
</div>
                        18</td>
                    <td>*</td>
                    <td>Automatic shutdown of the hydraulic pumps</td>
                    <td> 6 000 000</td>
                    <td> 10 000</td>
                    <td> 3 Mo</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th  scope="row"></th>
                    <td>
                    <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox19" value="19"  onChange={()=>handleCheckboxChange(19)}/>

</div>
                        19</td>
                    <td>*</td>
                    <td>Modernization of the process controls of the furnaces</td>
                    <td> 2 000 000</td>
                    <td> 25 000</td>
                    <td> 3 Mo</td>
                    <td>25 000</td>
                    <td>7 000</td>
                </tr>
                <tr>
                    <th  scope="row"></th>
                    <td>
                    <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox20" value="20"  onChange={()=>handleCheckboxChange(20   )}/>

</div>
                        20</td>
                    <td></td>
                    <td>Maintenance and upkeep program for key machines</td>
                    <td> 1 500 000</td>
                    <td> 9 000</td>
                    <td> 6 Mo</td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SummaryTable;