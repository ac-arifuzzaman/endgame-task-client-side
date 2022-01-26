import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Places from "../Places/Places";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Slider></Slider>
      <Places></Places>
    </div>
  );
};

export default Home;
