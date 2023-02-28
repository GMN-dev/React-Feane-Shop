import React from "react";
import CupomCard from "../cupomcard/cupomcard";
import img1 from '../assets/images/o2.jpg'
import img2 from '../assets/images/o1.jpg'
import './containerCupons_style.css'

function ContainerCupons(props){
    return(
        <div className="container-cupons">
            <CupomCard infoCard = {{'image':img1, "food":"Pizza Discount", "discount":20}} ></CupomCard>            
            <CupomCard infoCard = {{'image':img2, "food":"Big X Discount", "discount":10}} ></CupomCard>
        </div>
    );

}


export default ContainerCupons