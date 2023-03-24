import { Link } from "react-router-dom"

const NavBar = () => {

    return ( 
        <nav>
            <Link to={'homepage'}><button>Home</button></Link>
            <Link to={'create'}><button>Create Country</button></Link>
        </nav>
    )
}

export default NavBar;