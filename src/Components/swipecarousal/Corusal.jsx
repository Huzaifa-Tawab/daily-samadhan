import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./corusals.css";
import Swipe_img from "../../assets/whatwedo.png";
// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function Corusal() {
  return (
    <div div className="main-swipe-page">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        // className="mySwiper"
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={Swipe_img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Swipe_img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Swipe_img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Swipe_img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Swipe_img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Swipe_img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Swipe_img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Swipe_img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Swipe_img} alt="" />
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}
