import React, {Component} from 'react';
import './Header.css';

class Header extends Component{

  render(){
    return(
      <div className="header">
        <h1>Awren Nuit</h1>
        <div>
          <span>LINK TO RESUME</span>
          <span>https://github.com/AwrenNuit</span>
          <span>awren.nuit@gmail.com</span>
        </div>
      </div>
    );
  }
}

export default Header;