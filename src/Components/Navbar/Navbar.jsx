import React from "react";
import "./navbar.css";
import logo from "../../assets/mainlogo.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="main-nav">
      <div className="nav-top-hero">
        <p>info@dailysamadhan.com</p>
        <div className="nav-top-buttons">
          <button>
            <p>Log in</p>{" "}
          </button>
          <span>|</span>
          <button>
            <p>Register</p>
          </button>
        </div>
      </div>
      <div className="navbar-main-withlogo">
        <img src={logo} alt=""></img>
        <div className="navbar-list">
          <ul className="navbar-flex">
            <Link to="/" className="home">
              <li>Home</li>
            </Link>
            <span className="line"></span>
            <Link to="/" className="home">
              <li>About Us</li>
            </Link>
            <span className="line"></span>

            <Link to="/" className="home">
              <li>Complaint Portals</li>
            </Link>
            <span className="line"></span>

            <Link to="/" className="home">
              <li>Services</li>
            </Link>
            <span className="line"></span>

            <Link to="/" className="home">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
