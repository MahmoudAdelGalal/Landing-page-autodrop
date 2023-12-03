import React, { useEffect } from "react";
import "./section5.scss";
import Whatsapp from "../../assets/imgs/whatsapp.png";
import Mail from "../../assets/imgs/mail.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Section5 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className='section5' id='contact'>
      <div className='section5Container container'>
        <h2>
          Do you have an inquiry about Auto Drop? Are you having a problem?
        </h2>
        <div className='item-container'>
          {" "}
          <div data-aos='fade-up' className='left'>
            <form action=''>
              <div className='input'>
                <label htmlFor='name'>Full Name</label>
                <input placeholder='Enter Your Name' id='name' type='text' />
              </div>
              <div className='input'>
                <label htmlFor='email'>Email Address </label>
                <input
                  placeholder='example@gmail.com'
                  type='email'
                  id='email'
                />
              </div>
              <div className='input'>
                <label htmlFor='phone'>Phone Number</label>
                <input placeholder='+9660000000' id='phone' type='number' />
              </div>
              <div className='input'>
                <label htmlFor='message'>Message</label>
                <textarea
                  placeholder='Type your message here'
                  cols='30'
                  rows='10'
                ></textarea>
                <button>Send Message</button>
              </div>
            </form>
          </div>
          <div data-aos='fade-up' className='right'>
            <div className='right-container'>
              <div className='item'>
                <a
                  href='https://wa.me/+201557053437'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {" "}
                  <img src={Whatsapp} alt='' />
                </a>

                <p>+201557053437</p>
              </div>
              <div className='item'>
                <a
                  href='mailto:support@autodrop.me'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={Mail} alt='' />
                </a>

                <p>support@autodrop.me</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
