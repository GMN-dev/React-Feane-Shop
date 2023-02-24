import React from 'react';
import './App.css';
import HeaderContainer from './header/HeaderContainer';
import './assets/css/utils.css'
import Carousel from './carousel/carousel';
import CupomCard from './cupomcard/cupomcard';
import o2 from './assets/images/o2.jpg'
import MenuCard from './menuCard/menuCard';
import f1 from './assets/images/f1.png'


function App() {
  return (
    <div className="App">
        <section id='sectionHeader'>
        <HeaderContainer></HeaderContainer>
        {/* <CupomCard infoCard={{'food':'Pizza Days', 'discount':20, "image":o2}}></CupomCard> */}
        <Carousel></Carousel>
        </section>
    </div>
  );
}

export default App;
