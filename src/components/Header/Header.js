import React, {Component} from 'react';

class Header extends Component{

  render(){
    return(
      <div className="header">
        <h1>Awren Nuit</h1>
        <div>
          <p>https://github.com/AwrenNuit</p>
          <p>awren.nuit@gmail.com</p>
          <p>LINK TO RESUME</p>
        </div>
      </div>
    );
  }
}

export default connect()(Header);