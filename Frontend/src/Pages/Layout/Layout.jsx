import { Outlet, Link } from "react-router-dom";
import "./Layout.css";



const Layout = () =>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1 className="navbar-brand"><Link to="/">Home</Link></h1>
                <h1 className="navbar-brand"><Link> Score Board </Link></h1>

            </nav>
            <div className="gameField">
            <Outlet />
            </div>
        </div>
    )
}

export default Layout;