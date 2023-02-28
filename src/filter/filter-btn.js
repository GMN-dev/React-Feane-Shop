import React from "react";
import './filter_style.css'

function FilterButton(props){
    return( <div className="container-btn-filter"><span>{props.title}</span></div> );
}


export default FilterButton