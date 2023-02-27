import React from "react";
import ButtonOrder from "../btn_order/btn_order";
import './banner_style.css'

function BannerItem(props){
    return(
        <div className="slide-container">
              <h1 className="banner-title">{props.title}</h1>
              <p className="banner-description" >{props.description}</p>
              <ButtonOrder></ButtonOrder>
        </div>
    );
}

export default BannerItem