import React from "react";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/ProductContex";

const About = () => {
  const { Myname } = useProductContext();
  const data = {
    name: "Amazon E-Commerce",
  };
  return (
    <>
      {Myname}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
