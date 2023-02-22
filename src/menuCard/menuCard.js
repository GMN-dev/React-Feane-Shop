import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './menuCard_style.css'

function MenuCard(props){
    return(
        <div className="container-menucard">
            <div className="food-img">
                <img src={props.item.image} alt="" />
            </div>
            <div className="food-info">
                <h4>{props.item.food}</h4>
                <p>{props.item.description}</p>
                <div className="container-price">
                    <h5>{props.item.price}$</h5>
                    <div className="shop-cart-container"><a href=""><i className="fas fa-shopping-cart"></i></a></div>
                </div>
            </div>
        </div>
    );

}


export default MenuCard