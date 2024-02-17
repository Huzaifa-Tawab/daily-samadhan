import React from "react";
import HomeTimeline from "../../Components/homeTimeline/HomeTimeline";
import Counters from "../../Components/counters/Counters";
import HomeHero from "../../Components/homeHero/HomeHero";
import Testimonials from "../../Components/testimonies/Testimonials";
import Whatwedo from "../../Components/whatwedo/Whatwedo";
import Navbar from "../../Components/Navbar/Navbar";
import Whatweoffer from "../../Components/whatweoffer/Whatweoffer";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <Whatwedo />
      <Counters />
      <HomeTimeline />
      <Whatweoffer />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
