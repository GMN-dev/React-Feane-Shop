import React from 'react';
import './App.css';
import HeaderContainer from './header/HeaderContainer';
import ContainerCupons from './containerCupons/containerCupons';
import Menu from './menu/menu';
import Footer from './footer/footer';
import About from './about/about';
import HomeSlider from './carousel/carousel';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { ProviderContext } from './contextProvider';


let info=[{'title':'Nova pizza de prestigio', 'description':'Pizza com base e doce e muito mas muito leite condensado'},{'title':'Novidade! Sodas Italianas', 'description':'Sodas italianas dos mais diversos sabores'}]

Aos.init({delay: 490, duration: 800})

function App() {
  return (
    <ProviderContext>
      <div className="App">
          <section id='sectionHeader' >
            <div>
            <HeaderContainer></HeaderContainer>
            <HomeSlider info={info}></HomeSlider>
            </div>
          </section> 
          <main>
            <section id='menuSection' className='sectionMenu'>
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
                <div className="" data-aos="fade-up">
                    <ContainerCupons></ContainerCupons>
                </div>  
            </section>
          </main>

          <section id='sectionFooter'>
              <Footer></Footer>
          </section>
      </div>
    </ProviderContext>
  );
}


export default App;
