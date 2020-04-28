import React from 'react';
import './Landing.css';

export default function Landing() {

  return(
    <div className="main-container">
      <div className="landing-container">
        <p>Hi there!</p>
        <p>
          I'm&nbsp;
          <span className="landing-name">Awren Nuit</span>
          .
        </p>
        <p>I bring ideas to reality.</p>
        <div className="landing-btn-container">
          <button className="landing-button">Go</button>
          <span className="landing-box-lg"></span>
          <span className="landing-box-sm"></span>
        </div>
      </div>
    </div>
  );
}