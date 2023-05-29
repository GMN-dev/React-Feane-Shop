import React from "react";
import Logo from "../logo/logo";
import './header_style.css'
import MenuHamburguer from "../menuHamburguer/menuHamburguer";
import NavBar from "../navBar/navBar";
import Menubar from "../menubar/Menubar";
import Order from "../order/order";

function HeaderContainer(){
    return(
        <header >
            <div>
                <Logo title="Feane"></Logo>
            </div>
            <Menubar></Menubar>
            <Order></Order>
            <MenuHamburguer></MenuHamburguer>
        </header>
    );
}


export default HeaderContainer