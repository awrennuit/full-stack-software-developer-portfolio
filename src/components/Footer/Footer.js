import React from 'react';
import './Footer.css';

export default function Footer() {

  return(
    <div className="footer">
      <div>
        <p>&#169; {new Date().getFullYear()} Awren Nuit</p>
      </div>
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/awren-nuit/" target="_blank" rel="noopener noreferrer">
          <img src="images/icons/linkedin.svg" alt="linkedin icon" height="30px" width="30px" />
        </a>
        <a href="https://github.com/AwrenNuit" target="_blank" rel="noopener noreferrer">
          <img src="images/icons/github.svg" alt="github icon" height="30px" width="30px" />
        </a>
        <a href="mailto:awren.nuit@gmail.com?subject=I%20Loved%20Your%20Portfolio">
          <img src="images/icons/email.svg" alt="email icon" height="20px" width="30px" />
        </a>
      </div>
    </div>
  );
}