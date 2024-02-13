import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonials.css";
import Testimony from "./Testimony";
import Tlist from "./Testimony.json";
function Testimonials() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="testimonials">
      <div className="testinomials-content-top">
        <h2>Client Testinomial</h2>
        <h1>What A Customer Says About Us</h1>
      </div>
      <Slider {...settings} className="testimonials-slider">
        {Tlist.map((res) => (
          <Testimony
            key={res}
            imgUrl={res.imgUrl}
            heading={res.heading}
            para={res.para}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
