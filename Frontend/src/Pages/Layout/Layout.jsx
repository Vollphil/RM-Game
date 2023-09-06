import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import { useState } from "react";



const Layout = () =>{
   


    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1 className="navbar-brand"><Link to="/">Home</Link></h1>
                <h1 className="navbar-brand"><Link> Score Board </Link></h1>
                <h1 className="navbar-brand"><Link to="/summaryTable">Summary Table</Link></h1>

            </nav>
            <div className="gameField">
                <p>Player Name:</p>
            <Outlet />
            </div>
        </div>
    )
}

export default Layout;