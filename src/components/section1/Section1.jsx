import React, { useEffect } from "react";
import "./section1.scss";
import Navbar from "../navbar/Navbar";
import Rightimagee from "../../assets/imgs/section1.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Section1 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className='section1'>
      <Navbar />
      <div className='section1Container container'>
        <div data-aos='fade-up' className='left'>
          <h1>
            Start your e-commerce with Autodrop With integrated dropshipping
            services
          </h1>
          <p>
            Start your business with products at a wholesale price without
            capital by linking global dropshipping sites
          </p>
          <p>
            Autodrop is your best and easiest world to enter the world of
            e-commerce
          </p>
          <button>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://apps.salla.sa/ar/app/1090140720'
            >
              Start
            </a>
          </button>
        </div>
        <div data-aos='fade-up' className='right'>
          <img src={Rightimagee} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Section1;
