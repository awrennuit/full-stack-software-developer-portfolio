import React, {Component} from 'react';
import './Header.css';

class Header extends Component{

  render(){
    return(
      <div className="header">
        <h1>Awren Nuit</h1>
        <div>
          <p>https://github.com/AwrenNuit</p>
          <p>awren.nuit@gmail.com</p>
          <p>LINK TO RESUME</p>
          <br />          <br />
          <br />

          <button className="primary-btn">Button</button>
          <br />
          <br />
          <br />
          <div>
          <input className="text-field" type="text" />
          <label>Input Label</label>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;