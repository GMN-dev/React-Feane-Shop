import React from "react";
import ButtonOrder from "../btn_order/btn_order";
import bImg from '../assets/images/about-img.png'
import './about_style.css'


function About(){
    return(
        <aside className="container-about">
            <div className="img-burguer" data-aos="fade-right">
                <img id="burguer" src={bImg} alt="" />
            </div>
            <div className="container-about-p" data-aos="fade-down">
                <h2 className="about-title">We are Feane</h2>
                <p className="about-p">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All </p>
                <ButtonOrder></ButtonOrder>
            </div>
        </aside>
    );
}


export default About    