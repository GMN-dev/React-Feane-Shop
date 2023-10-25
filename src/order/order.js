import React from "react";
import ButtonOrder from "../btn_order/btn_order";
import './order_style.css'
import ShoppingCart from "../shoppingcart/shoppingcart";

function Order(){

    return (
        <div className="container-order">
            <a href=""><i className="fas fa-user"></i></a>
            <ShoppingCart></ShoppingCart>
            <a href=""><i className="fas fa-search"></i></a>
            <ButtonOrder></ButtonOrder>
        </div>
    );
}

export default Order;