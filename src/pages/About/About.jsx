import React from "react";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import TeamInfo from "./components/TeamInfo";
import Client from "./components/Client";
import Leaderteam from "../About/components/leaderteam";


const About = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <TeamInfo />
      <Leaderteam />
      <Client />
    </div>
  );
};

export default About;
