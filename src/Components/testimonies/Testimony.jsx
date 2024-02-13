import React from "react";
import "./testimonials.css";
function Testimony({ imgUrl, heading, para }) {
  return (
    <div className="testimony">
      <img className="testimony-avatar" src={imgUrl} alt="" />
      <h1>{heading}</h1>
      <p>{para}</p>
    </div>
  );
}

export default Testimony;
