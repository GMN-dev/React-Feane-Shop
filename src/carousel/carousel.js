import React from "react";
import './carousel_style.css'  
import BannerItem from '../banner/banner'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';

function HomeSlider(props) {
  return (
      <>
      <div>  
          <Swiper 
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 4100,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}>

          {
            props.info.map(
            (item)=>{
            return <SwiperSlide> <BannerItem title={item.title} description={item.description}></ BannerItem></SwiperSlide>
              }
            )
          }
          </Swiper>
        </div>
      </> )
  }
  


export default HomeSlider

