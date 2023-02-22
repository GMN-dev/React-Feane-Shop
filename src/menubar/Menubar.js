import React from "react";
import './menubar_style.css'

function Menubar(props){
    return(
        <ul>
            {props.links.map((link, index)=>{
                return(<li key={index}><a id="links-list" href="">{link}</a></li>);
            })}
        </ul>
    );
}


export default Menubar