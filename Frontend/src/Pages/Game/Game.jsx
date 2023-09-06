import {useState} from "react";
import WelcomePage from "../WelcomePage/WelcomePage";
import GameRound from "../GameRound/GameRound";

const Game = () => {
    const[gameStarted, setGameStarted] = useState(false);
    const [gameData,setGameData] = useState(null);
   
    
    return(
        <div>
           {!gameStarted ? <WelcomePage setGameData={setGameData} setGameStarted={setGameStarted} />
            : <GameRound  setGameData={setGameData}></GameRound>
        };
    
         
        </div>
    )
}
export default Game;