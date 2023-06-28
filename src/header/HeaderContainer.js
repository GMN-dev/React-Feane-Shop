import React, { useContext } from 'react';
import Logo from "../logo/logo";
import './header_style.css'
import MenuHamburguer from "../menuHamburguer/menuHamburguer";
import MenuDropdown from '../menuDropdown/menuDropdown'
import Menubar from "../menubar/Menubar";
import Order from "../order/order";
import { context } from "../contextProvider";

function HeaderContainer(){

    let {active, setActive} = useContext(context);

    const activeMenu = () => {
        setActive(!active);
    }    
    
    return(<>
        <header>
            <div>
                <Logo title="Feane"></Logo>
            </div>
            <Menubar></Menubar>
            <Order></Order>
            <MenuHamburguer active={active} activeMenu={activeMenu} ></MenuHamburguer>
        </header>
            <MenuDropdown  active={active} activeMenu={activeMenu}></MenuDropdown>
        </>
    );
}


export default HeaderContainer;