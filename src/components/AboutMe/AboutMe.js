import React, {Component} from 'react';
import {connect} from 'react-redux';

class AboutMe extends Component{

  render(){
    return(
      <>
      </>
    );
  }
}

const putReduxStateOnProps = (reduxState)=>({
  reduxState: reduxState.reducer
});

export default connect(putReduxStateOnProps)(AboutMe);