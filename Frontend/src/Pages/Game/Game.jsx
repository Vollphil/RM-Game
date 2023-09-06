import {useState} from "react";
import WelcomePage from "../WelcomePage/WelcomePage";

const Game = () => {
    const[gameStarted, setGameStarted] = useState(false);
    const [gameData,setGameData] = useState(null);
    return(
        <div>
            {!gameStarted && <WelcomePage setGameData={setGameData} setGameStarted={setGameStarted}/>};
        </div>
    )
}
export default Game;