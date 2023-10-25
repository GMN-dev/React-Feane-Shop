import { createContext, useState } from "react";

export let context = createContext();

export function ProviderContext(props){
    
    let [active, setActive] = useState(false);
    
    let contextValues = {
        active, 
        setActive
    }

    return (
        <>
            <context.Provider value={contextValues}>
               {props.children}
            </context.Provider>
        </>
    )
}