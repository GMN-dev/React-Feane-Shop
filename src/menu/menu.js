import React from "react";
import MenuCard from '../menuCard/menuCard'
import pratos from "../assets/bd";
import './menu_style.css'
import Logo from "../logo/logo";
import Filter from "../filter/filter";
import FilterButton from "../filter/filter-btn";

function Menu(){
    let options = ["All", "Burguer", "Pizza", "Fries", "Pasta"]
   
    return(
        <div className="container-menu">
            <Filter options={options}></Filter>
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