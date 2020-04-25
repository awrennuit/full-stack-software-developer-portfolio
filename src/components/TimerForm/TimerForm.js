import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function TimerForm() {

  const dispatch = useDispatch();
  const history = useHistory();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleChange = (e, prop)=>{
    if(isNaN(e.target.value)){
      e.target.value = 0;
    }
    if(prop === 'setDays' && e.target.value > 364){
      e.target.value = 364;
    }
    if(prop === 'setHours' && e.target.value > 23){
      e.target.value = 23;
    }
    if(prop === 'setMinutes' && e.target.value > 59){
      e.target.value = 59;
    }
    if(prop === 'setSeconds' && e.target.value > 59){
      e.target.value = 59;
    }

    prop(+e.target.value);
  }

  const handleSubmit = e => {
    e.preDefault();
    const state = {days, hours, minutes, seconds};
    dispatch({type: `SET_TIME`, payload: state});
    history.push('/timer');
  }

  return(
    <div className="timer-form">
      <h1>SET TIMER</h1>
      <form onSubmit={handleSubmit}>
        <TextField  
          type="text" 
          onChange={(e)=>handleChange(e, 'setDays')} 
          value={days} 
          id="standard-basic" 
          label="Days" 
          style={{width:"50px",margin:"10px"}} 
        />
        <TextField  
          type="text" 
          onChange={(e)=>handleChange(e, 'setHours')} 
          value={hours} 
          id="standard-basic" 
          label="Hours" 
          style={{width:"50px",margin:"10px"}} 
        />
        <TextField  
          type="text" 
          onChange={(e)=>handleChange(e, 'setMinutes')} 
          value={minutes} 
          id="standard-basic" 
          label="Minutes" 
          style={{width:"50px",margin:"10px"}}      
        />
        <TextField  
          type="text" 
          onChange={(e)=>handleChange(e, 'setSeconds')} 
          value={seconds} 
          id="standard-basic" 
          label="Seconds" 
          style={{width:"50px",margin:"10px"}} 
        />
        <br />
        <br />
        <Button type="submit" variant="outlined">Start Countdown</Button>
      </form>
    </div>
  );
}