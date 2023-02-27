import React from "react";
import Menubar from "../menubar/Menubar";
import Logo from "../logo/logo";
import './header_style.css'
import Order from "../order/order";

function HeaderContainer(){
    return(
        <header className="container">
            <div>
                <h1>asd</h1>
                <Logo title="Feane"></Logo>
            </div>
            <nav>
                <Menubar links={['HOME', 'MENU','ABOUT','BOOK TABLE']}>
                </Menubar>
            </nav>
            <div>
                <Order></Order>
            </div>
        </header>
    );
}


export default HeaderContainer