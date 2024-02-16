import React from "react";
import HomeTimeline from "../../Components/homeTimeline/HomeTimeline";
import Counters from "../../Components/counters/Counters";
import HomeHero from "../../Components/homeHero/HomeHero";
import Testimonials from "../../Components/testimonies/Testimonials";
import Whatwedo from "../../Components/whatwedo/Whatwedo";
import Navbar from "../../Components/Navbar/Navbar";
import Whatweoffer from "../../Components/whatweoffer/Whatweoffer";

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
    </div>
  );
}

export default Home;
