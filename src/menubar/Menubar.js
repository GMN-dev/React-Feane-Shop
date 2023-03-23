import React from "react";
import './menubar_style.css'

function Menubar(props){
    return(
        <ul className="list-menu" >
            <li ><a id="links-list" href="">HOME</a></li>
            <li ><a id="links-list" href="">MENU</a></li>
            <li ><a id="links-list" href="">ABOUT</a></li>
            <li ><a id="links-list" href="">BOOK TABLE</a></li>
        </ul>
    );
}
  

export default Menubar