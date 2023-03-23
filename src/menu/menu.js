import React, { useEffect, useState } from "react";
import MenuCard from '../menuCard/menuCard'
import './menu_style.css'
import Filter from "../filter/filter";
import FilterButton from "../filter/filter-btn";
import Loading from "../loading/loading";

function Menu(){

    let urlMenu = 'http://127.0.0.1:8000/api/menu/'
    let urlFilter = 'http://127.0.0.1:8000/api/tag/'
    let [apiFilter, setApiFilter] = useState()
    let [apiMenu, setApiMenu] = useState()

    useEffect(()=>{
        fetch(urlFilter)
        .then((resp)=>{return resp.json()})
        .then((data)=>{setApiFilter(data)})
    }, [])


    useEffect(()=>{
        fetch(urlMenu)
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
            <Filter options={apiFilter}></Filter>
            <div className="grid-menu">
            {
                apiMenu.map((obj)=><MenuCard info={obj}></MenuCard>)
            }
            </div>
        </div>
    );
}


export default Menu