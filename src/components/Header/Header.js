import React from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';

export default function Header() {

  const history = useHistory();

  return(
    <div className="header">
      <h1 className="home-heading" onClick={()=>(history.push('/'))}>Awren Nuit</h1>
      <div className="header-grid">
        <span className="resume-link" onClick={()=>(history.push('/resume'))}>View My Resume</span>
        <a className="github-link" href="https://github.com/AwrenNuit" target="_blank" rel="noopener noreferrer">
          <span>Checkout My GitHub</span>
        </a>
        <a className="email-link" href = "mailto: awren.nuit@gmail.com" rel="noopener noreferrer">
        <span>Email Me</span>
        </a>
      </div>
    </div>
  );
}