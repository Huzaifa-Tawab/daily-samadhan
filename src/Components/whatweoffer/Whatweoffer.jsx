import React from "react";
import "./whatweoffer.css";

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
        </div>
        <div className="offer-2">
          <h1>End-To-End Assistance</h1>
          <h2>₹ 999</h2>
          <h1>Whats Included</h1>
        </div>
        <div className="offer-3">
          <h1>Expert Advice & Complaints Assistance</h1>
          <h2>₹ 499</h2>
          <h1>Whats Included</h1>
        </div>
      </div>
    </div>
  );
}

export default Whatweoffer;
