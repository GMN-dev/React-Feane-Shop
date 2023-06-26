import React from "react";
import ButtonOrder from "../btn_order/btn_order";
import './banner_style.css'

function BannerItem(props){
    return(
        <div className="container slide-container">
            <div className=" heigh-slider">
                <div id="container-title-subtitle">
                <h1 className="banner-title">{props.title}</h1>
                <p className="banner-description" >{props.description}</p>
                </div>
                <ButtonOrder></ButtonOrder>
            </div>
        </div>
    );
}

export default BannerItem