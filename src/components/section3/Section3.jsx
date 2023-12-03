import React, { useEffect } from "react";
import "./section3.scss";
import Leftimage from "../../assets/imgs/section3(1).png";
import Rightimage from "../../assets/imgs/section3(2).png";
import AOS from "aos";
import "aos/dist/aos.css";
const Section3 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className='section3' id='services'>
      <div className='section3Container container'>
        <h1>Autodrop services</h1>
        <div className='itemsContainer'>
          <div data-aos='flip-left' className='item'>
            <h2>Orders</h2>
            <div className='item-container'>
              <div className='left'>
                <p>
                  Linking orders between the store and the dropshipping site
                  automatically
                </p>
                <p>Easily complete orders automatically</p>
                <p>Automatic order status change</p>
              </div>
              <div className='right'>
                <img src={Leftimage} alt='' />
              </div>
            </div>
          </div>
          <div data-aos='flip-right' className='item'>
            <h2>Products</h2>
            <div className='item-container'>
              <div className='left'>
                <p>Easily upload products through the product link</p>
                <p>Add all product options</p>
                <p>Automatic update of price, product quantities and options</p>
                <p>
                  Upload products in the appropriate classification for your
                  store, and add the profit percentage automatically
                </p>
              </div>
              <div className='right'>
                <img src={Rightimage} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
