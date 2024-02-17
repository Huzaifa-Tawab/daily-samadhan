import React from "react";
import aboutusimg from "../../assets/aboutus.png";
import "./about.css";
import Counters from "../../Components/counters/Counters";
import Corusal from "../../Components/swipecarousal/Corusal";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function Aboutus() {
  return (
    <>
      <Navbar />
      <div className="about-us-main">
        <div className="main-head-aboutus">
          <h1>
            Welcome To <span>Daily Samadhan!!</span>
          </h1>
        </div>
        <div className="About-us-flex">
          <div className="Content">
            <p>
              At Daily Samadhan, we're your trusted ally in the everyday battles
              of life. Our mission is to empower you with the information and
              resources you need to overcome your daily struggles and
              grievances. We understand that life can throw a myriad of
              challenges your way, from consumer complaints to navigating the
              complexities of GST filing or obtaining drone certificates. That's
              where we come in. We are your go-to destination for finding
              solutions to these challenges and more.
            </p>
          </div>
          <div className="about-us-img">
            <img src={aboutusimg} alt=""></img>
          </div>
        </div>
        <Counters />
        <Corusal />
      </div>
      <Footer />
    </>
  );
}

export default Aboutus;
