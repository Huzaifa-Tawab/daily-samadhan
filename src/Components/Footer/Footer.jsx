import React from "react";
import "./footer.css";
import footerlogo from "../../assets/mainlogo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footermain">
      <div className="footercolumn-1">
        <img src={footerlogo} alt=""></img>
        <p>Start your journey with us today!</p>
      </div>
      <div className="footercolumn-2">
        <h1>Address</h1>
        <p>
          10th Floor, Tower-B, Unitech Cyber Park, Sector-39, Gurugram, Haryana
          - 122011
        </p>
        <p>+91-9818908714</p>
        <p>info@loanmukt.co.in</p>
      </div>
      <div className="footercolumn-3">
        <ul>
          <h1>Address</h1>
          <Link to="/" className="home">
            <li>Home</li>
          </Link>
          <Link to="/" className="home">
            <li>Home</li>
          </Link>
          <Link to="/" className="home">
            <li>Home</li>
          </Link>
        </ul>
      </div>
      <div className="footercolumn-4">
        <ul>
          <h1>Address</h1>
          <Link to="/" className="home">
            <li>Home</li>
          </Link>
          <Link to="/" className="home">
            <li>Home</li>
          </Link>
          <Link to="/" className="home">
            <li>Home</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
