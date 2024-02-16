import React from "react";
import "./whatweoffer.css";
import check from '../../assets/check.png'

function Whatweoffer() {
  return (
    <div className="whatwe-offer-main">
      <div className="main-head-whatwedo">
        <h1>
          What <span>We</span> Offer?
        </h1>
      </div>
      <div className="offers-columns">
        <div className="offer-1">
          <h1>Complaint Assistance</h1>
          <h2>₹ 99</h2>
          <h1>Whats Included</h1>
          <span><img src={check} alt="" />
          2 calls from our team
          </span>
          <br />
          <span><img src={check} alt="" />
          Explaining a procedure to file a complaint
          </span>
          <br />
          <button>Get Started</button>
        </div>
        <div className="offer-2">
          <h1 className="header-offer-2">Most Popular</h1>
          <h1>End-To-End Assistance</h1>
          <h2>₹ 999</h2>
          <h1>Whats Included</h1>

          <span><img src={check} alt="" /> 5 calls from our team</span>
          <br />
          <span><img src={check} alt="" />Form Filling / Complaint Registration By Our Experts</span>
          <br />
          <span><img src={check} alt="" />Expert Advice / Weekly Update</span>
          <br />
          <button>Get Started</button>

        </div>
        <div className="offer-3">
          <h1>Expert Advice & Complaints Assistance</h1>
          <h2>₹ 499</h2>
          <h1>Whats Included</h1>
          <span><img src={check} alt="" />4 calls from our team</span>
          <br />
          <span><img src={check} alt="" />On call assistance to file complaint</span>
          <br />
          <button>Get Started</button>

        </div>
      </div>
    </div>
  );
}

export default Whatweoffer;
