import React from "react";
import Hero from "./components/Hero";
import Factory from "./components/Factory";
import ProductVarient from "./components/ProductVarient";
import ShortStory from "./components/ShortStory";
import Certified from "./components/Certified";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductVarient />
      <Factory />
      <ShortStory />
      <Certified />
    </div>
  );
};

export default Home;
