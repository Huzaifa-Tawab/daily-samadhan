import React from "react";
import HomeTimeline from "../../Components/homeTimeline/HomeTimeline";
import Counters from "../../Components/counters/Counters";
import HomeHero from "../../Components/homeHero/HomeHero";
import Testimonials from "../../Components/testimonies/Testimonials";
import Whatwedo from "../../Components/whatwedo/Whatwedo";

function Home() {
  return (
    <div>
      <HomeHero />
      <Whatwedo />
      <HomeTimeline />
      <Counters />
      <Testimonials />
    </div>
  );
}

export default Home;
