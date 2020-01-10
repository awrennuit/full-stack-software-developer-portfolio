import React, {Component} from 'react';
import {connect} from 'react-redux';

class AboutMe extends Component{

  render(){
    return(
      <>
        <img src="MYPIC.JPG" alt="portrait of Awren" />
        <p>Hey! I'm Awren. My true passion is creating things. As a child I drew all sorts of monsters and aliens. Then I got into music and started learning instruments and making my own songs. After that I did a deep dive on herbalism and energywork. Most recently I attended Prime Digital Academy to learn software engineering. I can confidently say that this is my calling. I absolutely love thinking up practical apps to build and learning new skills along the way.</p>
        <p>I'm still an active musician making my own strange music that ranges from extreme metal to meditative ambience. Gardening is my favorite destress activity. Many of the plants I grow are used in herbal remedies I make. I try to hold a few classes a year to assist people with gaining basic practical herbal knowledge.</p>
        <p>Thanks for dropping by and checking out where I'm at in my coding adventure. I wish you well~</p>
        <p>-Awren Nuit</p>
      </>
    );
  }
}

const putReduxStateOnProps = (reduxState)=>({
  reduxState: reduxState.reducer
});

export default connect(putReduxStateOnProps)(AboutMe);