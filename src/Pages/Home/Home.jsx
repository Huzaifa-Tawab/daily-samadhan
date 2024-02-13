import React from "react";
import HomeTimeline from "../../Components/homeTimeline/HomeTimeline";
import Counters from "../../Components/counters/Counters";
import HomeHero from "../../Components/homeHero/HomeHero";
import Testimonials from "../../Components/testimonies/Testimonials";

function Home() {
  return (
    <div>
      <HomeHero />
      <HomeTimeline />
      <Counters />
      <Testimonials />
    </div>
  );
}

export default Home;
