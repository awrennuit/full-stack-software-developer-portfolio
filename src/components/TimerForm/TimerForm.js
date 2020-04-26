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
    else if(prop === 'days' && e.target.value > 364){
      e.target.value = 364;
    }
    else if(prop === 'hours' && e.target.value > 23){
      e.target.value = 23;
    }
    else if(prop === 'minutes' && e.target.value > 59){
      e.target.value = 59;
    }
    else if(prop === 'seconds' && e.target.value > 59){
      e.target.value = 59;
    }

    return e.target.value;
  }

  const handleSubmit = e => {
    e.preventDefault();
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
          onChange={e => {handleChange(e, 'days');setDays(e.target.value);}} 
          value={days} 
          id="standard-basic" 
          label="Days" 
          style={{width:"50px",margin:"10px"}} 
        />
        <TextField  
          type="text" 
          onChange={e => {handleChange(e, 'hours');setHours(e.target.value);}} 
          value={hours} 
          id="standard-basic" 
          label="Hours" 
          style={{width:"50px",margin:"10px"}} 
        />
        <TextField  
          type="text" 
          onChange={e =>{handleChange(e, 'minutes');setMinutes(e.target.value);}}
          value={minutes} 
          id="standard-basic" 
          label="Minutes" 
          style={{width:"50px",margin:"10px"}}      
        />
        <TextField  
          type="text" 
          onChange={e =>{handleChange(e, 'seconds');setSeconds(e.target.value);}}
          value={seconds} 
          id="standard-basic" 
          label="Seconds" 
          style={{width:"50px",margin:"10px"}} 
        />
        <br />
        <br />
        <Button type="submit" variant="outlined">Start Countdown</Button>
        {/* <input  
          type="text" 
          onChange={(e)=>{handleChange(e, 'days');setDays(e.target.value);}} 
          value={days} 
          style={{width:"50px",margin:"10px"}} 
        />
        <input  
          type="text" 
          onChange={(e)=>{handleChange(e, 'hours');setHours(e.target.value);}} 
          value={hours} 
          label="Hours" 
          style={{width:"50px",margin:"10px"}} 
        />
        <input  
          type="text" 
          onChange={(e)=>{handleChange(e, 'minutes');setMinutes(e.target.value);}} 
          value={minutes} 
          label="Minutes" 
          style={{width:"50px",margin:"10px"}}      
        />
        <input  
          type="text" 
          onChange={(e)=>{handleChange(e, 'seconds');setSeconds(e.target.value);}} 
          value={seconds} 
          label="Seconds" 
          style={{width:"50px",margin:"10px"}} 
        />
        <br />
        <br />
        <button type="submit">Start Countdown</button> */}
      </form>
    </div>
  );
}