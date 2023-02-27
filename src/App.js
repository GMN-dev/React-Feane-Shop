import React from 'react';
import './App.css';
import HeaderContainer from './header/HeaderContainer';
import ContainerCupons from './containerCupons/containerCupons';
import Menu from './menu/menu';
import MenuCard from './menuCard/menuCard';
// import pratos from './assets/bd';


let info=[{'title':'Nova pizza de prestigio', 'description':'Pizza com base e doce e muito mas muito leite condensado'},{'title':'Novidade! Sodas Italianas', 'description':'Sodas italianas dos mais diversos sabores'}]


function App() {
  return (
    <div className="App">
        <section id='sectionHeader'>
          <HeaderContainer></HeaderContainer>
          {/* <CupomCard infoCard={{'food':'Pizza Days', 'discount':20, "ima  ge":o2}}></CupomCard> */}
          {/* <InfoCarousel info={[{'title':'Nova pizza de prestigio', 'description':'Pizza com base e doce e muito mas muito leite condensado'},{'title':'Novidade! Sodas Italianas', 'description':'Sodas italianas dos mais diversos sabores'}]} ></InfoCarousel> */}

          {/* {
            info.map((item) => {
              return(
                <BannerItem title={item.title} description={item.description}></BannerItem>    
              )
            })
          } */}

        </section>
        <section id='sectionCupom'>
            <div className="container">
                <ContainerCupons></ContainerCupons>
            </div>  
        </section>
        <section className='sectionMenu'>
            <div className="container">
                <Menu></Menu>
            </div>
        </section>
          
        
    </div>
  );
}

export default App;
