import React from "react";
import '../menuDropdown/menuDropdown.css'
import Order from "../order/order";
import '../order/order_style.css'

function MenuDropdown(props) {
    return(
    <ul className={props.active === false ? "inactive" : "menu-hamburguer-extend"}>
        <li key={1}>
            <a id="links-list" href="#sectionHeader">
            HOME
            </a>
        </li>
        <li key={2}>
            <a id="links-list" href="#menuSection">
            MENU
            </a>
        </li>
        <li key={3}>
            <a id="links-list" href="#sobre">
            ABOUT
            </a>
        </li>
        <li key={4}>
            <a id="links-list" href="#promo">
            CUPONS
            </a>
        </li>
        <li> 
            <div className="container-order-mobile">
                <a href=""><i className="fas fa-user"></i></a>
                <a href=""><i className="fas fa-shopping-cart"></i></a>
                <a href=""><i className="fas fa-search"></i></a>
            </div>
        </li>
    </ul>
    )
}
export default MenuDropdown