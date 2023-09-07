import {useContext, useState, useEffect} from "react";
import PlayerContext from "../../PlayerContext";


const CreateUser = () => {
    const {username, setUsername, password, setPassword} = useContext(PlayerContext);
    const [repeatPassword, setRepeatPassword] = useState("");
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);


    const createUser = () => {
        if (password === repeatPassword) {
            setIsPasswordMatch(true);
            return fetch('http://localhost:8080/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    authorities: ['ROLE_USER']
                })
            })
                .then(response => {
                    if (response.status === 201) {
                        console.log("User registered successfully");
                    } else if (response.status === 409) {
                        console.error("User with the same username already exists");
                    } else {
                        console.error("An unknown error occurred");
                    }
                })
                .catch(error => console.error('Error', error));
        } else {
            setIsPasswordMatch(false);
        }
    }
    return (<div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Account Name</span>
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Password</span>
            <input
                type="password"
                className="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon2"
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Repeat Password</span>
            <input
                type="password"
                className="form-control"
                placeholder="Repeat Password"
                aria-label="Repeat Password"
                aria-describedby="basic-addon2"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
            />
        </div>
        <div>


            <button type="button" className="btn btn-secondary" onClick={() => createUser()}>
                Submit
            </button>
            {!isPasswordMatch &&
                <div className="alert alert-danger" role="alert">
                    Passwords do not Match!
                </div>}


        </div>
    </div>)
}

export default CreateUser;