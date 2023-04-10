import React, { useRef } from 'react';
import './App.css';
import HeaderContainer from './header/HeaderContainer';
import ContainerCupons from './containerCupons/containerCupons';
import Menu from './menu/menu';
import Footer from './footer/footer';
import About from './about/about';
import HomeSlider from './carousel/carousel';



let info=[{'title':'Nova pizza de prestigio', 'description':'Pizza com base e doce e muito mas muito leite condensado'},{'title':'Novidade! Sodas Italianas', 'description':'Sodas italianas dos mais diversos sabores'}]



function App() {
  return (
    <div className="App">
        <section id='sectionHeader'>
          <HeaderContainer></HeaderContainer>
          <HomeSlider info={info}></HomeSlider>
        </section>
        <main>
          <section id='menu' className='sectionMenu'>
              <div className="container">
                  <Menu></Menu>
              </div>
          </section>
          <section id='sobre' className='sectionAbout'>
              <div className="container">
                  <About></About>
              </div>
          </section>
          <section id='promo'>
              <div className="container">
                  <ContainerCupons></ContainerCupons>
              </div>  
          </section>
        </main>

        <section id='sectionFooter'>
          <div className='container'>
            <Footer></Footer>
          </div>
        </section>
    </div>
  );
}


export default App;
