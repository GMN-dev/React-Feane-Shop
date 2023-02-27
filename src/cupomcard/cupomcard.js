import React from "react";
import ButtonOrder from "../btn_order/btn_order";
import './cupomcard_style.css'


function CupomCard(props){
    return(
        <div className="cupomCard">
            <div className="imagePromo">
                <img className="imgs-circle" src={props.infoCard.image}  alt={props.infoCard.food} />
            </div>
            <div className="infoCupom">
                <h5 className="nameCupom">{props.infoCard.food}</h5>
                <p className="infoDiscount"><span className="discount">{props.infoCard.discount}%</span> Off</p>
                <ButtonOrder></ButtonOrder>
            </div>
        </div>
    );
}   

export default CupomCard;