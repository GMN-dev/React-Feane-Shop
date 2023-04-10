import React from "react";
import './menubar_style.css'

function Menubar(){
    return(
        <ul className="list-menu" >
            <li ><a id="links-list" href="#sectionHeader">HOME</a></li>
            <li ><a id="links-list" href="#menu">MENU</a></li>
            <li ><a id="links-list" href="#sobre">ABOUT</a></li>
            <li ><a id="links-list" href="#promo">CUPONS</a></li>
        </ul>
    );
}
  

export default Menubar