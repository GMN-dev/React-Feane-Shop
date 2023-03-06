import React from "react";
import './footer_style.css'


function Footer(){
    return(
        <>
        <footer>
            <div className="box-footer" id="f-section1">
                <h3 className="footer-title">Contact Us</h3>
                <a href=""><i className="fa-solid fa-location-dot"></i> <span>Location</span></a>
                <a href=""><i className="fa-solid fa-phone"></i> <span>Call 55 61 9 98210860</span></a>
                <a href=""><i className="fa-solid fa-envelope"></i> <span>g.magalhaes.dev@gmail.com</span></a>
            </div>
            <div className="box-footer" id="f-section2">
                <h3 className="footer-title">Feane</h3>
                <p>© 2023 All Rights Reserved By Free Html Templates</p>
                <p>© Distributed By ThemeWagon</p>
                <div className="social-midias">
                    <a href="" className="container-midia"><div ><i class="fa-brands fa-instagram"></i></div></a>
                    <a href="" className="container-midia"><div ><i class="fa-brands fa-linkedin-in"></i></div></a>
                    <a href="" className="container-midia"><div ><i class="fa-brands fa-github"></i></div></a>
                </div>
            </div>
            <div className="box-footer" id="f-section3">
                <h3 className="footer-title">Opening Hours</h3>
                <p>Everyday</p>
                <p>10:00 Am - 10:00 Pm</p>
            </div>
        </footer>
        </>
    );
}


export default Footer