import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import Button from '@material-ui/core/Button';

export default function Timer() {

  const history = useHistory();
  const timer = useSelector(state => state.timer);
  const [alarm, setAlarm] = useState(false);
  const [alarmDone, setAlarmDone] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  // const [interval, setInterval] = useState('');

  useEffect(()=>{
    set();
  }, []);

  async function set() {
    await setDays(+timer.days);
    await setHours(+timer.hours);
    await setMinutes(+timer.minutes);
    await setSeconds(+timer.seconds);
    setInterval(() => countdown(), 1000);
  }

  useEffect(()=>{
    if(alarm){
      const audio = new Audio(`/sounds/alarm.mp3`);
      audio.play();
      setAlarm(false);
      setAlarmDone(true);
    }
  }, [alarm]);

  // useEffect(()=>{
  //   clearInterval(interval);
  // }, [history]);

  const countdown = () => {

    const calcTimeLeft = () => {

      let newDays = +days;
      let newHours = +hours;
      let newMinutes = +minutes;
      let newSeconds = +seconds;
      console.log('sec:', seconds);
      console.log('newsec:', newSeconds);

      // newSeconds--;

      // Handle seconds change
      // if(newSeconds <= 0 && newMinutes <= 0 && newHours <= 0 && newDays <= 0){
      //   newSeconds = 0;
      //   if(!alarmDone){
      //     setAlarm(true);
      //   }
      // }
      // else if(newSeconds < 0){
      //   newSeconds = 59;
      //   newMinutes--;
      // }

      // // Handle minutes change
      // if(newMinutes <= 0 && newHours <= 0 && newDays <= 0){
      //   newMinutes = 0;
      // }
      // else if(newSeconds === 59 && newMinutes <= 0){
      //   newMinutes = 59;
      //   newHours--;
      // }

      // // Handle hours change
      // if(newHours <= 0 && newDays <= 0){
      //   newHours = 0;
      // }
      // else if(newSeconds === 59 && newMinutes === 59 && newHours <= 0){
      //   newHours = 23;
      //   newDays--;
      // }

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

        // ------------------TO USE DATE AS COUNTDOWN-----------------
      // let stop = new Date('2020-01-01');
      // stop.setDate(stop.getDate()+days);
      // stop.setHours(stop.getHours()+hours);
      // stop.setMinutes(stop.getMinutes()+minutes);
      // stop.setSeconds(stop.getSeconds()+seconds);
      // let now = new Date();
      // let timeDiff = (stop - now) / 1000;
      // if (timeDiff > 0) {
      //     setDays(Math.floor(timeDiff / 86400));
      //     setHours(Math.floor((timeDiff % 86400) / 3600));
      //     setMinutes(Math.floor((timeDiff % 3600) / 60));
      //     setSeconds(Math.floor(timeDiff % 60));
      // }
    }
    setInterval(calcTimeLeft(), 1000);
  }

  return(
    <div className="countdown-container">
      {JSON.stringify(seconds)}
      <div className="countdown">
        {days < 10 ? "0"+days : days}d:
        {hours < 10 ? "0"+hours : hours}h:
        {minutes < 10 ? "0"+minutes : minutes}m:
        {seconds < 10 ? "0"+seconds : seconds}s
      </div>
      {/* <Button variant="outlined" onClick={setTimer}>Set Timer</Button> */}
      <button onClick={()=>history.push(`/set-timer`)}>Set Timer</button>
    </div>
  );
}