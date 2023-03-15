import React, { useEffect, useState } from "react";
import MenuCard from '../menuCard/menuCard'
import './menu_style.css'
import Filter from "../filter/filter";
import FilterButton from "../filter/filter-btn";
import Loading from "../loading/loading";

function Menu(){

    let url = 'http://127.0.0.1:8000/api/menu/'
    let options = ["All", "Burguer", "Pizza", "Fries", "Pasta"]
    let [apiMenu, setApiMenu] = useState()

    useEffect(()=>{
        fetch(url)
        .then((response) => {
                return response.json();
            })
        .then((data) => {
                setApiMenu(data)
            });
    }, [])



    if (!apiMenu) {
        return (<>
            <Loading></Loading>
        </>)
    }
    


    return(
        <div className="container-menu">
            <Filter options={options}></Filter>
            <div className="grid-menu">
            {
                apiMenu.map((obj)=><MenuCard info={obj}></MenuCard>)
            }
            </div>
        </div>
    );
}


export default Menu