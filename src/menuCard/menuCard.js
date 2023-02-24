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
                <h5 className="food-title">{props.item.food}</h5>
                <p className="description-item">{props.item.description}</p>
                <div className="container-price">
                    <h5 className="price">R${props.item.price}</h5>
                    <a id='link-buy' href=""> <div className="shop-cart-container"><i className="fas fa-shopping-cart"></i></div></a>
                </div>
            </div>
        </div>
    );

}


export default MenuCard