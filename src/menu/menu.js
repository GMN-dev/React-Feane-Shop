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
    let [text, setText ] = useState('')


    
    useEffect(()=>{
        fetch(urlMenu)
        .then((response) => { return response.json();})
        .then((data) => { setApiMenu(data)});
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
    
    

    if (text==''){
        var res = apiMenu
    }else{
        var res = apiMenu.filter((element) => {return element.tag.name == text})
    }



    function configText(exe){
         setText(exe)
    }



    return(
        <div className="container-menu">
            {/* <Filter options={apiFilter}></Filter> */}
            <div className="container-filter">
                <h2 className="menu-title">Our Menu</h2>
                <div className="filters" >

                    <div className="container-btn-filter" onClick={()=> configText('')}> <span>Todos</span></div>
                    {apiFilter.map(
                        (opt) => {
                            return(
                                // <FilterButton title={opt.name}></FilterButton>
                                <div className="container-btn-filter" onClick={()=> configText(opt.name)}> <span>{opt.name} </span></div>
                                )
                            } 
                        )
                    }
                    </div>

                </div>
                <div className="grid-menu">
                {    
                    res.map((obj)=><MenuCard info={obj}></MenuCard>)
                }
            </div>
        </div>
    );
}


export default Menu