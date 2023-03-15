import React, { useState } from "react";
import FilterButton from "./filter-btn";


function Filter(props){



    return(
        <> 
            <div className="container-filter">
                <h2 className="menu-title">Our Menu</h2>
                <div className="filters">
                {props.options.map(
                    (opt) => {
                        return(
                            <FilterButton title={opt}></FilterButton>
                        )
                    }
                )}
                </div>
            </div>
        </>
    );
}


export default Filter