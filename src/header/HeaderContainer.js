import React from "react";
import Menubar from "../menubar/Menubar";
import Logo from "../logo/logo";
import './header_style.css'
import Order from "../order/order";

function HeaderContainer(){
    return(
        <header className="container">
            <div>
                <Logo title="Feane"></Logo>
            </div>
            <nav>
                <Menubar>
                </Menubar>
            </nav>
            <div>
                <Order></Order>
            </div>
        </header>
    );
}


export default HeaderContainer