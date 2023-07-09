import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function TimerForm(props) {
  const dispatch = useDispatch();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleChange = (e, prop) => {
    if (isNaN(e.target.value)) {
      e.target.value = 0;
    } else if (prop === 'days' && e.target.value > 364) {
      e.target.value = 364;
    } else if (prop === 'hours' && e.target.value > 23) {
      e.target.value = 23;
    } else if (prop === 'minutes' && e.target.value > 59) {
      e.target.value = 59;
    } else if (prop === 'seconds' && e.target.value > 59) {
      e.target.value = 59;
    }

    return e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const state = { days, hours, minutes, seconds };
    dispatch({ type: `SET_TIME`, payload: state });
    props.timer(true);
  };

  return (
    <div className="timer-form">
      <h1>SET TIMER</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          onChange={(e) => {
            handleChange(e, 'days');
            setDays(+e.target.value);
          }}
          value={days}
          id="standard-basic"
          variant="standard"
          label="Days"
          style={{ width: '50px', margin: '10px' }}
        />
        <TextField
          type="text"
          onChange={(e) => {
            handleChange(e, 'hours');
            setHours(+e.target.value);
          }}
          value={hours}
          id="standard-basic"
          variant="standard"
          label="Hours"
          style={{ width: '50px', margin: '10px' }}
        />
        <TextField
          type="text"
          onChange={(e) => {
            handleChange(e, 'minutes');
            setMinutes(+e.target.value);
          }}
          value={minutes}
          id="standard-basic"
          variant="standard"
          label="Minutes"
          style={{ width: '50px', margin: '10px' }}
        />
        <TextField
          type="text"
          onChange={(e) => {
            handleChange(e, 'seconds');
            setSeconds(+e.target.value);
          }}
          value={seconds}
          id="standard-basic"
          variant="standard"
          label="Seconds"
          style={{ width: '50px', margin: '10px' }}
        />
        <br />
        <br />
        <Button
          type="submit"
          variant="outlined"
          style={{
            paddingTop: '5px',
            paddingBottom: '10px',
          }}
        >
          Start Countdown
        </Button>
      </form>
    </div>
  );
}
