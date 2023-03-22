import React from "react";

import '../css/navStyle.css'
import '../js/navbar.js'

const NavBar =()=>{
    return(
    <div className="NavContainer d-flex">
        <div className="navMain d-flex" id="navMain">
            <div className="orderWapper d-flex">
                <ul className="orderNavList d-flex">
                    <li className="hover-underline-animation"> About Us</li>
                    <li className="hover-underline-animation">Services </li>
                    <li className="navlogo"></li>
                    <li className="hover-underline-animation">Contact Us</li>
                    <li className="hover-underline-animation">Login </li>
                </ul>
            </div>
         </div>
    </div>

    )
}

export default NavBar;