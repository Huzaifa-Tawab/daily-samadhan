import React from "react";
import whatwedoimg from "../../assets/whatwedo.png";
import "./whatdo.css";
export default function Whatwedo() {
  return (
    <div className="main-whatwe-do">
      <div className="main-head-whatwedo">
        <h1>
          What <span>We</span> Do?
        </h1>
      </div>
      <div className="Content-whatwedo">
        <div className="col-1-whatwedo">
          <p>
            we specialize in assisting individuals with filing complaints on
            various complaint portals.{" "}
          </p>
        </div>
        <div className="col-2-what-wedo">
          <img src={whatwedoimg} alt=""></img>
          <div className="iner-col2">
            <p>
              By providing clear, step-by-step instructions to navigate
              complaint portals effortlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
