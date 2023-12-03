import React, { useEffect } from "react";
import "./section4.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AOS from "aos";
import "aos/dist/aos.css";
const Section4 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className='section4' id='questions'>
      <div className='section4Container container'>
        <h1>Common Questions</h1>
        <div data-aos='fade-up'>
          <Accordion className='accord'>
            <AccordionSummary
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography className='accordTitle'>
                What is AutoDrop?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Auto Drop is a website established in 2023 in order to
                facilitate and facilitate the e-commerce process for merchants,
                providing them with a service Automatic linking between their
                store and popular websites and platforms that support
                dropshipping.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div data-aos='fade-up'>
          <Accordion className='accord'>
            <AccordionSummary
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography className='accordTitle'>
                How does Auto Drop work?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                1- The merchant installs our application through the platform he
                is using <br /> 2- An account is automatically registered for
                the merchant immediately after installing the application, and
                the login data for the Auto Drop website is sent via the email
                used in the same platform used <br />
                3- The merchant chooses the appropriate package for him and
                subscribes to it
                <br /> 4- The merchant links the products he wants from the Ali
                Express website by adding the product URL
                (https://aliexpress.com/item/....) and adjusts the product data
                as he likes before uploading and linking it.
                <br /> 5- When there are orders on the merchant’s store, they
                are automatically transferred to his account in AutoDrop with
                all the data (the merchant must pay the price of the original
                product - before increasing the merchant’s profit - in order to
                complete the order automatically
                <br /> 6- All product data linked to the merchant's store is
                automatically updated and synchronized every short period
                <br /> 7- When the status of the order is updated by the
                supplier, its status is automatically synchronized in the
                merchant’s account in AutoDrop and from there to his store in
                the used platform.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div data-aos='fade-up'>
          <Accordion className='accord'>
            <AccordionSummary
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography className='accordTitle'>
                Is it possible to try the site for free?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Yes, you can try it for free</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div data-aos='fade-up'>
          <Accordion className='accord'>
            <AccordionSummary
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography className='accordTitle'>
                How do I contact support?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can write to us via the WhatsApp icon below, or by emailing
                us
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Section4;
