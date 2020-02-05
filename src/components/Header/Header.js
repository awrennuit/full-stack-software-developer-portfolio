import React from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';

export default function Header() {

  const history = useHistory();
  
  const pushHistoryToResume = () => {
    console.log('in there');
    history.push('/resume');
  }

  return(
    <div className="header">
      <h1>Awren Nuit</h1>
      <div className="header-grid">
        <span className="resume-link" onClick={pushHistoryToResume}>LINK TO RESUME</span>
        <span className="github-link">https://github.com/AwrenNuit</span>
        <span className="email-link">awren.nuit@gmail.com</span>
      </div>
    </div>
  );
}