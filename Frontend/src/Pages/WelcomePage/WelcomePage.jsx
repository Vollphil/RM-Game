import "./WelcomePage.css"
import {useEffect, useState} from "react";

const WelcomePage = ({setGameData,setGameStarted}) => {
    const [localGameData, setLocalGameData] = useState(null);
    const [rounds, setRounds] = useState(0);
    const [difficulty,setDifficulty] = useState(0);
    const [playerName,setPlayerName] = useState("");

    const startGame = async () => {
        try {
            const response = await fetch('http://localhost:8080/game/start', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({rounds: rounds, playerName: playerName,startingMoney: difficulty})
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






    return (
        <div>
            <h2 className="text">Welcome to the RM-Game</h2>



            {localGameData ? (  <div>
                <h3 className="text">Review your choices:</h3>
                <p className="text">Chosen Rounds: {rounds}</p>
                <p className="text">Chosen Name: {playerName}</p>
                <p className="text">Starting Money:{difficulty}</p>
                <button 
            onClick={() => {
              startGame();
              setGameStarted(true); 
            }}
          >
            Confirm
          </button>
          <button onClick={() => setLocalGameData(null)}>Change</button>
            </div>
            ):
                (

            <div>
            <div>
                <p className="text">Please select how many Rounds you want to play</p>
                <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={e => setRounds(parseInt(e.target.value))}>
                    <option value="" selected>Select rounds</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                </select>
            </div>
            <p className="text">Please Enter a Name</p>
            <div>
            <div class="input-group mb-3">
  
  <input type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" onChange={e => setPlayerName(e.target.value)}/>
</div>
<div>
                <p className="text">Please select the Difficulty </p>
                <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={e => setDifficulty(parseInt(e.target.value))}>
                    <option value="0" selected>Select difficulty    </option>
                    <option value="100000">Easy</option>
                    <option value="50000">Normal</option>
                    <option value="25000">Hard</option>
                    
                </select>
                <p className="text">Your Starting Money will be {difficulty}</p>
            </div>

            </div>

            <button type="submit" onClick={startGame}>Submit</button>

            </div>
                )}
        </div>
    )
}
export default WelcomePage;