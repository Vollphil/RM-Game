import { Outlet, Link } from "react-router-dom";



const Layout = () =>{
    return(
        <div>
            <nav>
                <h1 className="grow"><Link to="/">Home</Link></h1>
                <h1 className="grow"><Link> Score Board </Link></h1>
            </nav>
            <div className="GameField">
            <Outlet />
            </div>
        </div>
    )
}

export default Layout;