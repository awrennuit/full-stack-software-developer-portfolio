import React, {Component} from 'react';
import './Header.css';

class Header extends Component{

  render(){
    return(
      <div className="header">
        <h1>Awren Nuit</h1>
        <div className="header-grid">
          <span className="resume-link">LINK TO RESUME</span>
          <span className="github-link">https://github.com/AwrenNuit</span>
          <span className="email-link">awren.nuit@gmail.com</span>
        </div>
      </div>
    );
  }
}

export default Header;