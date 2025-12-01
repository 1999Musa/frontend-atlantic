import React from "react";
import Hero from "./components/Hero";
import Factory from "./components/Factory";
import ProductVarient from "./components/ProductVarient";
// import ShortStory from "./components/ShortStory";
import Certified from "./components/Certified";
import Whyus from "./components/Whyus";
import Manufacture from "./components/Manufacture";
import Brandsupport from "./components/Brandsupport";
import Register from "../Login/components/Register";

const Home = () => {
  return (
    <div>
      <Hero />
      <Whyus />
      <ProductVarient />
      <Manufacture />
      <Brandsupport />
      < Register />
      <Factory />
      {/* <ShortStory /> */}
      <Certified />
    </div>
  );
};

export default Home;
