import React from "react";
import "./footer.scss";
import Whatsapp from "../../assets/imgs/whatsapp.png";
import Telegram from "../../assets/imgs/telegram (1).png";
import Youtube from "../../assets/imgs/youtube.png";
import Facebook from "../../assets/imgs/facebook.png";
import Visa from "../../assets/imgs/visa.png";
import Magdy from "../../assets/imgs/mada.png";
import Master from "../../assets/imgs/master.png";
import Logo from "../../assets/imgs/footerlogo.png";
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footerContainer container'>
        <div className='left'>
          <div className='logo'>
            <img src={Logo} alt='' />
          </div>
          <p>
            A website established in 2023 in order to facilitate the e-commerce
            process for merchants
          </p>
          <span>Connect with us</span>
          <div className='icons'>
            <a
              href='https://wa.me/+201557053437'
              target='_blank'
              rel='noopener noreferrer'
            >
              {" "}
              <img src={Whatsapp} alt='' />
            </a>
            <a
              href='https://t.me/autodrop_community'
              target='_blank'
              rel='noopener noreferrer'
            >
              {" "}
              <img src={Telegram} alt='' />
            </a>

            <a
              href='https://www.youtube.com/@autodrop_me'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={Youtube} alt='' />
            </a>

            <a
              href='https://www.facebook.com/profile.php?id=61550574895518&mibextid=ZbWKwL
'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={Facebook} alt='' />
            </a>
          </div>
        </div>
        <div className='center'>
          <h4>Auto Drop</h4>
          <p>
            <a
              href='https://autodrop.me/pages/policy-and-privacy'
              target='_blank'
              rel='noopener noreferrer'
            >
              Privacy policy
            </a>
          </p>
          <p>
            <a
              href=' https://autodrop.me/pages/terms'
              target='_blank'
              rel='noopener noreferrer'
            >
              Terms of uses
            </a>
          </p>
          <p>
            <a
              href=' https://autodrop.me/pricing'
              target='_blank'
              rel='noopener noreferrer'
            >
              Pricing
            </a>
          </p>
        </div>
        <div className='right'>
          <h1>Payment methods</h1>
          <div className='wrapper'>
            <div>
              <img src={Visa} alt='' />
            </div>

            <div>
              <img src={Magdy} alt='' />
            </div>
            <div>
              <img src={Master} alt='' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
