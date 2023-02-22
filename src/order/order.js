import React from "react";
import ButtonOrder from "../btn_order/btn_order";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './order_style.css'


function Order(){
    return (
        <div className="container-order">
            <a href=""><i className="fas fa-user"></i></a>
            <a href=""><i className="fas fa-shopping-cart"></i></a>
            <a href=""><i className="fas fa-search"></i></a>
            <ButtonOrder></ButtonOrder>
        </div>
    );
}

export default Order