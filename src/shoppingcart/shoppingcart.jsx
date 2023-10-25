import { useState } from "react";
import "../shoppingcart/shoppingcart.css"


let ShoppingCart = () => {
    let [shoppingCartOnOff, setShoppingCartOnOff] = useState(false)
    
    function shoppingCartOnOffFunction(){
        setShoppingCartOnOff(!shoppingCartOnOff)
    }

    return(
        <div id="shoppingcart-container">    
            <i className="fas fa-cart-shopping style-shoppingcart" id="shoppingcart" onClick={shoppingCartOnOffFunction}></i>
            <aside className={shoppingCartOnOff?"shoppingcart-items style-shoppingcart":"shoppingcart-items style-shoppingcart shoppingcart-disabled"}>
                <ul>
                    
                </ul>
            </aside>
        </div>
    )
}

export default ShoppingCart;
