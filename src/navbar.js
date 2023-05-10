import "./navbar.css";
import a from "./png10.png";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <div className="block">
            <img src={a} alt="logo" />
            <ul className="navbar">
            
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/education">EDUCATION</Link></li>
            <li><Link to="/projects">PROJECTS</Link></li>
            <li><Link to="/personal_info">PERSONAL INFO</Link></li>
        </ul>
        </div>
    )
}

export default Navbar ;