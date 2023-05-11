import React, { useEffect, useState } from "react";
import MenuCard from '../menuCard/menuCard'
import './menu_style.css'
import Loading from "../loading/loading";
import FilterButton from "../filter/filter_style.css";

function Menu(){
    let urlFilter = 'http://127.0.0.1:8000/api/tag/'
    let [apiFilter, setApiFilter] = useState()
    let urlMenu = 'http://127.0.0.1:8000/api/menu/'
    let [apiMenu, setApiMenu] = useState()
    let [currentCards, setCurrentCards] = useState()


    
    useEffect(()=>{
        fetch(urlMenu)
        .then((response) => { return response.json();})
        .then((data) => { 
            setApiMenu(data)
            setCurrentCards(data)});
    }, [])

    useEffect(()=>{
        fetch(urlFilter)
        .then((resp)=>{return resp.json()})
        .then((data)=>{setApiFilter(data)})
    }, [])




    if (!apiMenu) {
        return (<>
            <Loading></Loading>
        </>)
    }



    function configMenuCards(filter){
        let newCards = filter === '' ? apiMenu : apiMenu.filter((element) => {return element.tag.name == filter});
        setCurrentCards(newCards);
    }



    return(
        <div className="container-menu" data-aos="fade-up">
            <div className="container-filter">
                <h2 className="menu-title">Our Menu</h2>
                <div className="filters" >

                    <div className="container-btn-filter" onClick={()=> configMenuCards('')}> <span>Todos</span></div>
                    {apiFilter.map(
                        (opt) => {
                            return(
                                // <FilterButton title={opt.name}></FilterButton>
                                <div className="container-btn-filter" onClick={()=> configMenuCards(opt.name)}> <span>{opt.name} </span></div>
                                ) 
                            } 
                        )
                    }
                    </div>
                </div>
                <div className="grid-menu">
                {    
                    currentCards.map((obj)=><MenuCard data-aos="zoom-in" info={obj}></MenuCard>)
                }
            </div>
        </div>
    );
}


export default Menu