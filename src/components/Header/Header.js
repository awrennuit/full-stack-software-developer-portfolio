import React from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';

export default function Header() {

  const history = useHistory();

  const pushHistoryHome = () => history.push('/');
  const pushHistoryToResume = () => history.push('/resume');

  return(
    <div className="header">
      <h1 className="home-heading" onClick={pushHistoryHome}>Awren Nuit</h1>
      <div className="header-grid">
        <span className="resume-link" onClick={pushHistoryToResume}>View My Resume</span>
        <a className="github-link" href="https://github.com/AwrenNuit" target="_blank">
          <span>Checkout My GitHub</span>
        </a>
        <span className="email-link">awren.nuit@gmail.com</span>
      </div>
    </div>
  );
}