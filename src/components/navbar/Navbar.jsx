import React from "react";
import "./navbar.scss";
import Logo from "../../assets/imgs/logo.png";
import Profile from "../../assets/imgs/profile.png";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <section className='navbar'>
      <div className='navbarContainer container'>
        <div className='left'>
          <img src={Logo} alt='' />
        </div>
        <div className='center'>
          <ul>
            <li>
              <Link
                to='home'
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='features'
                spy={true}
                smooth={true}
                offset={-15}
                duration={500}
              >
                Features
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to='services'
                spy={true}
                smooth={true}
                offset={-15}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li>
              {" "}
              <a
                href=' https://autodrop.me/pricing'
                target='_blank'
                rel='noopener noreferrer'
              >
                {" "}
                Pricing
              </a>
            </li>
            <li>
              {" "}
              <Link
                to='questions'
                spy={true}
                smooth={true}
                offset={-15}
                duration={500}
              >
                Common Questions
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to='contact'
                spy={true}
                smooth={true}
                offset={-15}
                duration={500}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className='right'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://autodrop.me/account/login'
            blank
          >
            <img src={Profile} alt='' />
            <span>log in</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
