import React from "react";
import './carousel_style.css'  
import { Slide } from "react-slideshow-image";
import BannerItem from '../banner/banner'

function InfoCarousel(props) {
  const listInfo = props.info
  
  return (
      <>
        <Slide>
          {listInfo.map(
            (item) => {
              return(<BannerItem title={item.title} description={item.description}></ BannerItem>)
            }
          )}
        </Slide>
      </> 
    );
  }
  


export default InfoCarousel

