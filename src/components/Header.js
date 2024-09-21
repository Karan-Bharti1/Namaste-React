import {Logo_URL} from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
 export const Header=()=>{
    const [btnName,setBtnName]=useState("Login")
    return <div className="header">
<div className="logo-container">
    <img className="logo" src={Logo_URL}/>
</div>
<div className="nav-items">
<ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact Us</Link></li>
    <li>Cart</li>
    <button onClick={()=>{
      btnName==="Login" ? setBtnName("Log Out"):setBtnName("Login")
    }} className="login-btn">{btnName} 👤</button>
</ul>
</div>
    </div>
}
export default Header;