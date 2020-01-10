import React, {Component} from 'react';
import {connect} from 'react-redux';

class Projects extends Component{

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

export default connect(putReduxStateOnProps)(Projects);