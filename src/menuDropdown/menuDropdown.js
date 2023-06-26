import React from "react";
import '../menuDropdown/menuDropdown.css'
import Order from "../order/order";

function MenuDropdown(props) {
    return(
    <ul className={props.active === false ? "inactive" : "menu-hamburguer-extend"}>
    <li>
        <a id="links-list" href="#sectionHeader">
        HOME
        </a>
    </li>
    <li>
        <a id="links-list" href="#menuSection">
        MENU
        </a>
    </li>
    <li>
        <a id="links-list" href="#sobre">
        ABOUT
        </a>
    </li>
    <li>
        <a id="links-list" href="#promo">
        CUPONS
        </a>
    </li>
    </ul>
    )
}
export default MenuDropdown