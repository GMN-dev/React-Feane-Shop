import React from "react";
import MenuCard from '../menuCard/menuCard'
import pratos from "../assets/bd";
import './menu_style.css'



function Menu(){
  
    console.log(pratos)
    return(
        <div className="container-menu">
            <div className="grid-menu">
            {
                pratos.map((prato) => {
                    return(
                    <MenuCard info = {{"image":prato.image, "food":prato.food, "price":prato.price, "description":prato.description}}></MenuCard>
                    );
                })
            }
            </div>
        </div>
    );

}


export default Menu