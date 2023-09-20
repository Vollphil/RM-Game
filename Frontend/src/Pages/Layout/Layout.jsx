import {Outlet, Link} from "react-router-dom";
import "./Layout.css";
import {useState} from "react";
import PlayerContext from "../../PlayerContext";


const Layout = () => {
    const [playerMoney, setPlayerMoney] = useState(30000);
    const [playerName, setPlayerName] = useState("");
    const [rounds, setRounds] = useState(0);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1 className="navbar-brand"><Link to="/">Home</Link></h1>
                <h1 className="navbar-brand"><Link> Score Board </Link></h1>
                <h1 className="navbar-brand"><Link to="/summaryTable">Summary Table</Link></h1>
                <h1 className="navbar-brand"><Link to="/createUser">Create User</Link></h1>
                <h1 className="navbar-brand"><Link to="/login">Login</Link></h1>

            </nav>


            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <p>Your Name: {playerName}</p>
                        <p>Rounds Left: {rounds}</p>
                        <p>Your Cash: {playerMoney}</p>
                    </div>
                    <div className="gameField col-8">
                        <PlayerContext.Provider
                            value={{
                                playerMoney, setPlayerMoney,
                                playerName, setPlayerName,
                                rounds, setRounds,
                                username, setUsername,
                                password, setPassword
                            }}>
                            <Outlet/>
                        </PlayerContext.Provider>
                    </div>
                    <div className="col-2"></div>

                </div>
            </div>

        </div>
    )
}

export default Layout;