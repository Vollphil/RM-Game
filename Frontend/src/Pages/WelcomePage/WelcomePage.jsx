import PlayerContext from "../../PlayerContext";
import "./WelcomePage.css"
import {useContext, useState} from "react";

const WelcomePage = ({setGameData, setGameStarted}) => {
    const [localGameData, setLocalGameData] = useState(null);

    const {playerMoney, setPlayerMoney, playerName, setPlayerName, rounds, setRounds} = useContext(PlayerContext);
    const [playerId, setPlayerId] = useState(null);


    const fetchRandomStartingMoney = async () => {
        try {
            const response = await fetch('http://localhost:8080/game/randomStartingMoney', {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            
            setPlayerMoney(data);
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error.message);
        }
    };

    const startGame = async () => {
        try {
            const response = await fetch('http://localhost:8080/game/start', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ playerName: playerName})
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);

            }
            const data = await response.json();
            setLocalGameData(data);
            setGameData(data);

            setPlayerId(data.player.id);
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error.message);
        }

    }

    


    return (
        <div>
            <h2 className="text">Welcome to the RM-Game</h2>


            {localGameData ? (<div>
                        <h3 className="text">Review your choices:</h3>
                        <p className="text">Chosen Rounds: {rounds}</p>
                        <p className="text">Chosen Name: {playerName}</p>
                        <p className="text">Starting Money:{playerMoney}</p>
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
                ) :
                (

                    <div>
                        <div>
                            <p className="text">There will be 4 Rounds played</p>
                         
                        </div>
                        <p className="text">Please Enter a Name</p>
                        <div>
                            <div class="input-group mb-3">

                                <input type="text" class="form-control" placeholder="Name" aria-label="Username"
                                       aria-describedby="basic-addon1" onChange={e => setPlayerName(e.target.value)}/>
                            </div>
                            <div>
                                <p className="text">You will get Random starting Money (20000-100000) </p>
                                <button type="button" onClick={fetchRandomStartingMoney}>Random</button>
                                <p className="text">Your starting Money = {playerMoney}</p>
                                
                               
                               
                            </div>

                        </div>

                        <button type="submit" onClick={startGame}>Submit</button>

                    </div>
                )}
        </div>
    )
}
export default WelcomePage;