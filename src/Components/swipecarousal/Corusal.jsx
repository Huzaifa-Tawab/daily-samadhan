import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import swiperimg1 from "../../assets/image1.jpg";
import swiperimg2 from "../../assets/image2.jpg";
import swiperimg3 from "../../assets/image3.jpg";
import swiperimg4 from "../../assets/image4.jpg";
import swiperimg5 from "../../assets/image5.jpg";
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
          <img src={swiperimg1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiperimg2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiperimg3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiperimg4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiperimg5} alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>
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
        </SwiperSlide> */}
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
