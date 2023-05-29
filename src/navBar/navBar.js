import React from "react";
import Menubar from "../menubar/Menubar";
import Order from "../order/order";
import '../navBar/navBar.css'

export default function NavBar(){
    return(
        <nav>
            <Menubar></Menubar>
            <Order></Order>
        </nav>
    )

}
