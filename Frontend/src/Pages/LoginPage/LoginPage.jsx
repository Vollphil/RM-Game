import {useContext} from "react";
import PlayerContext from "../../PlayerContext";
import {useState} from "react";
import {Buffer} from 'buffer/';


const LoginPage = () => {
    const {username, setUsername, password, setPassword} = useContext(PlayerContext);
    const initialMessage = 'Outcome will be displayed here...';
    const [message, setMessage] = useState(initialMessage);

    const handleLogin = () => {
        const headers = new Headers();
        const auth = Buffer.from(
            username + ":" + password
        ).toString("base64");
        headers.set("Authorization", "Basic " + auth);
        return fetch('http://localhost:8080/login', {method: "GET", headers: headers})
            .then((response) => response.text())
            .then(jwt => {
                setMessage('JWT: ' + jwt);
                localStorage.setItem('jwt', jwt);
            })
            .catch((error) => console.log("ERROR: " + error));
    }


    return (
        <div>
            <h1 className="text">Login</h1>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Username</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                       aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Password</span>
                <input type="password" className="form-control" placeholder="Password" aria-label="Password"
                       aria-describedby="basic-addon1"/>
            </div>
            <button type="button" className="btn btn-secondary" onClick={() => handleLogin()}>
                Submit
            </button>

            <div className="w-auto p-3">
                <p className="text">{message}</p>
            </div>
        </div>
    )
}
export default LoginPage;