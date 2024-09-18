import {Logo_URL} from "../../utils/constants";
import { useState } from "react";
 export const Header=()=>{
    const [btnName,setBtnName]=useState("Login")
    return <div className="header">
<div className="logo-container">
    <img className="logo" src={Logo_URL}/>
</div>
<div className="nav-items">
<ul>
    <li>Home</li>
    <li>About Us</li>
    <li>Contact Us</li>
    <li>Cart</li>
    <button onClick={()=>{
      btnName==="Login" ? setBtnName("Log Out"):setBtnName("Login")
    }} className="login-btn">{btnName} 👤</button>
</ul>
</div>
    </div>
}
export default Header;