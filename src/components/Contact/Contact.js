import React from 'react';
import './Contact.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Contact() {

  return(
    <>
      <Header />
      <div className="contact-main-container">
        <div className="contact-writeup">
          <p>
            Hello! These are different mediums to reach me. My preference is via email or 
            LinkedIn, but any option is fine. I am in the US Central (CDT/CST) timezone, 
            which ranges from -5 to -6 hours from UTC based on the time of year. I would 
            love to connect if you are seeking a software engineer. I adore front-end work, 
            and also geek out over back-end work.
          </p>
          <span className="contact-sidebars"></span>
          <span className="contact-divider"></span>
        </div>
        <div className="contact-grid">
          <div className="contact-info-block contact-email">
            <p>
              Email:&nbsp;
              <a href="mailto:awren.nuit@gmail.com?subject=I%20Loved%20Your%20Portfolio"
              >
                awren.nuit@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-info-block contact-phone">
            <p>
              Phone:&nbsp;
              <a href="tel:+01-651-276-3461"
              >
                651-276-3461
              </a>
            </p>
          </div>
          <div className="contact-info-block contact-github">
            <p>
              GitHub:&nbsp;
              <a href="https://github.com/AwrenNuit"
              >
                AwrenNuit
              </a>
            </p>
          </div>
          <div className="contact-info-block contact-linkedin">
            <p>
              LinkedIn:&nbsp;
              <a href="https://www.linkedin.com/in/awren-nuit/"
              >
                Awren Nuit
              </a>
            </p>
          </div>
        </div>
        <div className="contact-thanks">
          <p>Thanks for stopping by, and I hope to hear from you!</p>
        </div>
      </div>
      <Footer />
    </>
  );
}