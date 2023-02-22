import React from "react";
import Menubar from "../menubar/Menubar";
import Logo from "../logo/logo";
import './header_style.css'
import Order from "../order/order";

function HeaderContainer(){
    return(
        <header>
            <div className="container">
                <Logo></Logo>
            </div>
            <nav className="container">
                <Menubar links={['HOME', 'MENU','ABOUT','BOOK TABLE']}>
                </Menubar>
            </nav>
            <div className="container">
                <Order></Order>
            </div>
        </header>
    );
}


export default HeaderContainer