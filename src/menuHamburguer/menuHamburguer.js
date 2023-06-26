import React, { useState } from "react";
import '../menuHamburguer/menuHamburguer.css'

export default function MenuHamburguer(props){

    return(
        <div className="hamburguer-icon"> 
            <i onClick={()=>{props.activeMenu()}} id="menu" className={props.active === false ? 'fa-solid fa-bars fa-2xl' : 'fa-solid fa-xmark fa-2xl'} ></i>
        </div>  
    );
}