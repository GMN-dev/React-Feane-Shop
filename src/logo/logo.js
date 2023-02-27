import React from "react";
import './logo_style.css'

function Logo(props){
    return(
        <h1 className="logo"><a href="">{props.title}</a></h1>        
    );
}


export default Logo