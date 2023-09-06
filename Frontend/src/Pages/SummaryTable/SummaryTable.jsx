import {useEffect, useState} from "react";

const fetchComputerCompany =() => {
return fetch('http://localhost:8080/game/computerCompany').then((res) => res.json());
}
const SummaryTable = () => {
    const [computerCompany,setComputerCompany] = useState({});

    useEffect(() => {
    fetchComputerCompany()
        .then((computer) => {
        setComputerCompany(computer)
        })
    }, []);
console.log(computerCompany)

    return (
        <div>
            <table className="table">
                <thead>
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
                <tbody>
                <tr>

                </tr>
                <tr>
                    <th scope="row">Computer</th>

                    <td>1</td>
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
                    <td>2</td>
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
                    <td>3</td>
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
                    <td>4</td>
                    <td></td>
                    <td>Appointment & training for the function of sprinkler warden</td>
                    <td>74 500 000</td>
                    <td> 4 000</td>
                    <td> 1 Mo</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th  scope="row">Stock</th>
                    <td>5</td>
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
                    <td>6</td>
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
                    <td>7</td>
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
                    <td>8</td>
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
                    <td>9</td>
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
                    <td>10</td>
                    <td></td>
                    <td>Installation of a second fire water pump</td>
                    <td> 59 000 000</td>
                    <td> 60 000</td>
                    <td> 3 Mo</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th  scope="row">Printing hall</th>
                    <td>11</td>
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
                    <td>12</td>
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
                    <td>13</td>
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
                    <td>14</td>
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
                    <td>15</td>
                    <td></td>
                    <td>Storage of finished goods 15 cm above floor level</td>
                    <td> 200 000</td>
                    <td> 13 000</td>
                    <td> 2 Mo</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th  scope="row">Tools</th>
                    <td>16</td>
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
                    <td>17</td>
                    <td>*</td>
                    <td>Additional extinguishing water line to the public network</td>
                    <td> 12 000 000</td>
                    <td> 38 000</td>
                    <td> 8 Mo</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th  scope="row">Metal</th>
                    <td>18</td>
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
                    <td>19</td>
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
                    <td>20</td>
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