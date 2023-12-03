import React from "react";
import "./home.scss";
import Section1 from "../../components/section1/Section1";
import Section2 from "../../components/section2/Section2";
import Section3 from "../../components/section3/Section3";
import Section5 from "../../components/section5/Section5";
import Footer from "../../components/footer/Footer";
import Section4 from "../../components/section4/Section4";
const Home = () => {
  return (
    <div className='home'>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
};

export default Home;
