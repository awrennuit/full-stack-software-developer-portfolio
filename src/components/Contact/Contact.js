import React from "react";
import "./Contact.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { contactData } from "../../utils/contactData";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="contact-main-container">
        <div className="contact-writeup">
          <p>
            Hello! These are different mediums to reach me. My preference is via
            email or LinkedIn, but any option is fine. I am in the US Central
            (CDT/CST) timezone, which ranges from -5 to -6 hours from UTC based
            on the time of year. I would love to connect if you are seeking a
            software engineer. I adore front-end work, and also geek out over
            back-end work.
          </p>
          <span className="contact-sidebars"></span>
          <span className="contact-divider"></span>
        </div>
        <div className="contact-grid">
          {contactData.map((info, i) => (
            <ContactInfo
              class={info.class}
              href={info.href}
              key={i}
              label={info.label}
              method={info.method}
              rel={info.rel}
              target={info.target}
            />
          ))}
        </div>
        <div className="contact-thanks">
          <p>Thanks for stopping by, and I hope to hear from you!</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
