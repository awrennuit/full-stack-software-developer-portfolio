import React from 'react';
import './Home.css';

export default function Home() {

  return(
    <div className="main-container">
      <div className="landing-container">
        <p>Hi there!</p>
        <p>
          I'm&nbsp;
          <span>Awren Nuit</span>
          .
        </p>
        <p>I bring ideas to reality.</p>
        <div className="landing-btn-container">
          <button className="landing-button">Go</button>
        </div>
      </div>
    </div>
  );
}