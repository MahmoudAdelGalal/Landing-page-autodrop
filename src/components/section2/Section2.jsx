import React, { useEffect } from "react";
import "./section2.scss";
import Rightimage from "../../assets/imgs/section2.png";
import Icon1 from "../../assets/imgs/icon1.png";
import Icon2 from "../../assets/imgs/icon2.png";
import Icon3 from "../../assets/imgs/icon3.png";
import Icon4 from "../../assets/imgs/icon4.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Section2 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className='section2' id='features'>
      <div className='section2Container container'>
        <div className='top'>
          <div data-aos='fade-down' className='left'>
            <h2>How does AutoDrop work?</h2>
            <p>
              Provides you with support to establish your business, you do not
              need more From inventory costs in advance or shipping logistics It
              provides products and full link to drop shopping sites
            </p>
          </div>
          <div data-aos='fade-left' className='right'>
            <img src={Rightimage} alt='' />
          </div>
        </div>
        <div className='bottom'>
          <h2>Autodrop features</h2>
          <div className='itemContainer'>
            <div data-aos='flip-left' className='item'>
              <div className='icon'>
                <img src={Icon1} alt='' />
              </div>
              <h2>Shipping</h2>
              <p>
                In AutoDrop you can pick up Orders are shipped automatically
              </p>
            </div>
            <div data-aos='flip-right' className='item'>
              <div className='icon'>
                <img src={Icon2} alt='' />
              </div>
              <h2>Automatic linking</h2>
              <p>
                In AutoDrop you can link Products and upload their photos to
                Your store as a merchant and receive orders and shipped
                automatically
              </p>
            </div>
            <div data-aos='flip-left' className='item'>
              <div className='icon'>
                <img src={Icon3} alt='' />
              </div>
              <h2>Provide products</h2>
              <p>
                Auto Drop provides you with more than 30,000 diverse products
                from dropshipping sites
              </p>
            </div>
            <div data-aos='flip-right' className='item'>
              <div className='icon'>
                <img src={Icon4} alt='' />
              </div>
              <h2>without capital</h2>
              <p>
                In AutoDrop you don't need to Start-up capital for your store
                mail
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
