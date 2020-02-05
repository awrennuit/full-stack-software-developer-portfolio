import React, {Component} from 'react';
import './Home.css';

class Home extends Component{

  render(){
    return(
      <div className="main-container">
        <div className="main-card">
          <img 
            className="avatar" 
            src="./images/avatar.jpg" 
            alt="shoulders and up of me looking slightly to the left"
          />
        </div>
      </div>
    );
  }
}

export default Home;