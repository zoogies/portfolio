import "./Navbar.css";
import "../../Resources/shared.css";

export default function NavBar(){
    return(
        <a className="navbar_top b3 shadow" href="/">
            <img className="logo" alt="logo" src={require("../../Resources/Images/pagman.png")}/>
            <h1>Zoogies</h1>
        </a>
    )
}