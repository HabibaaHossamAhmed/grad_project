import React, { useState,useEffect } from 'react';
import '../css/style.css'
import '../css/navStyle.css'
import logo from '../imgs/logo.png'
import { Link } from 'react-router-dom';

const NavBar =()=>{
    function handleClick() {
        var x = window.matchMedia("(max-width: 760px)")
        if(x.matches)
        {
        if(document.getElementById('navresMenu').style.display == "none")
{
        document.getElementById('navresMenu').style.display = "block";
        document.getElementById('NavContainer').style.background = "#ffff";
}
else
{
        document.getElementById('navresMenu').style.display = "none";
        document.getElementById('NavContainer').style.background = "transparent";
        document.getElementById('navresWrapper').style.background = "transparent";
}
    }

}
const backgroundTransparent =()=>
{
    if(window.innerWidth > 760)
    {
            document.getElementById('navresMenu').style.display = "none"
            document.getElementById('navMain').style.display = "flex";
            document.getElementById('NavContainer').style.background = "transparent";
    }
    else
    {
        document.getElementById('navMain').style.display = "none";
    }
}
const [navbar,setNavbar] = useState(false);

const changeBackground =()=>{
    if(window.innerWidth > 760)
    {
        if (window.scrollY > 100) {setNavbar(true);}
        else
        {setNavbar(false);}
    }
}
window.addEventListener('resize', backgroundTransparent)
useEffect(() => {
    changeBackground()
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground)
})
    return(
    <div className="NavContainer d-flex" id="NavContainer">
        <div className ={navbar ? "navMain navScroll d-flex trans" : "navMain d-flex trans"} id='navMain'>
            <div className="orderWapper d-flex">
                <ul className="orderNavList d-flex">
                    <li> About Us</li>
                    <li>Services </li>
                    <li className="navlogo">
                    <img src={logo} alt="portAthourity" />
                    </li>
                    <li className="contact">Contact Us</li>
                    <li >Login </li>
                </ul>
            </div>
        </div>


        <div className="navresponsivebtn" id="navresponsivebtn">

        <div className="navresWrapper" id="navresWrapper" onClick={handleClick}>
        <img src={logo} alt="portAthourity" />
        </div>
        <div className="navresMenu" id="navresMenu">
        <div className="navresTitles d-flex">
                <ul className="navresTitleslist">
                    <li className="hover-underline-animation"> About Us</li>
                    <li className="hover-underline-animation">Services </li>
                    <li className="hover-underline-animation">Contact Us</li>
                    <li className="hover-underline-animation loginpad hover-underline-animationlogin">Login </li>
                </ul>
            </div>
</div>
    </div>
    </div>


    )
}

export default NavBar;