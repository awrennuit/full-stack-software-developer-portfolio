import { useEffect, useRef, useState } from 'react';
import { timerInputs } from '../utils/timerInputs';
import Header from './Header';

export default function Timer() {
  const [isAlarmDone, setIsAlarmDone] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const [playAlarm, setPlayAlarm] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    done: false,
  });

  const intervalRef = useRef(null);

  useEffect(() => {
    if (!showTimer) return;

    intervalRef.current = setInterval(() => {
      setTime(prev => {
        let { days, hours, minutes, seconds } = prev;

        seconds--;

        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }

        if (minutes < 0) {
          minutes = 59;
          hours--;
        }

        if (hours < 0) {
          hours = 23;
          days--;
        }

        if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
          return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
        }

        return { days, hours, minutes, seconds, done: false };
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [showTimer]);

  useEffect(() => {
    if (!time.done) return;

    clearInterval(intervalRef.current);

    if (!isAlarmDone) setPlayAlarm(true);
  }, [time.done]);

  useEffect(() => {
    if (!playAlarm) return;

    const audio = new Audio('/sounds/alarm.mp3');

    audio.play();

    setPlayAlarm(false);
    setIsAlarmDone(true);
  }, [playAlarm]);

  const format = num => (num < 10 ? '0' + num : num);

  const handleChange = (e, key, max) => {
    let value = parseInt(e.target.value, 10);

    if (isNaN(value)) value = 0;

    if (max !== undefined) value = Math.min(value, max);

    setTime(prev => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    setShowTimer(false);
    setPlayAlarm(false);
    setIsAlarmDone(false);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      time.days <= 0 &&
      time.hours <= 0 &&
      time.minutes <= 0 &&
      time.seconds <= 0
    ) {
      return;
    }

    setShowTimer(true);
  };

  return (
    <main className={`timer ${isLightMode ? 'timer--light' : ''}`}>
      <Header />
      <article className="timer__inner">
        <button
          className="timer__theme-btn"
          onClick={() => setIsLightMode(!isLightMode)}
        >
          {isLightMode ? 'Light' : 'Dark'}
        </button>
        <h1>Timer</h1>
        {showTimer ? (
          <>
            <p className="timer__countdown">
              {format(time.days)}d:{format(time.hours)}h:{format(time.minutes)}
              m:
              {format(time.seconds)}s
            </p>
            <button onClick={handleReset}>Reset</button>
          </>
        ) : (
          <>
            <form name="timer-form" onSubmit={handleSubmit}>
              <div className="timer__inputs">
                {timerInputs.map(i => (
                  <label key={i.key}>
                    {i.label}
                    <input
                      placeholder={i.placeholder}
                      type="number"
                      value={time[i.key]}
                      onChange={e => handleChange(e, i.key, i.max)}
                    />
                  </label>
                ))}
              </div>
              <button type="submit">Start</button>
            </form>
          </>
        )}
      </article>
    </main>
  );
}
