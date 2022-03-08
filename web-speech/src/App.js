import React, { useState, useEffect } from 'react';
import { useStopwatch } from 'react-timer-hook';
import './App.css';

function App() {
  const [timers, setTimers] = useState([
    {time: 2, text: 'hello world!'},
    {time: 5, text: 'how is it going?'},
    {time: 8, text: 'hey there'},
  ]);
  const {seconds, start, reset, isRunning} = useStopwatch({autoStart: false});

  useEffect(() => {
    const foundTimer = timers.find(t => t.time === seconds);

    if (foundTimer) {
      // speak text
    };

    // check if seconds is greater than last timer's time
    if (seconds > timers[timers.length - 1].time) reset();
  }, [seconds]);

  const updateTimers = (index, time, text) => {
    const newTimers = [...timers];
    newTimers[index].time = time;
    newTimers[index].text = text;

    setTimers(newTimers);
  };

  const addTimer = () => {
    const newTimers = [...timers, {time: 100, text: 'dummy text'}];
    setTimers(newTimers);
  };

  return (
    <div className="app">
      <h2>Talk the Talk</h2>

      <div className="timers">
        {/* timers go here */}
        {timers.map((timer, index) => (
          <TimerSlot
            key={index}
            index={index}
            timer={timer}
            updateTimers={updateTimers}
          />
        ))}

        <button className="add-button" onClick={addTimer}>Add</button>
      </div>

      {/* seconds */}
      <h2>{seconds}</h2>

      {/* buttons */}
      <div className="buttons">
        {isRunning ||
        <button className="start-button" onClick={start}>Start</button>}
        {isRunning &&
        <button className="stop-button" onClick={reset}>Stop</button>}
      </div>
    </div>
  );
}

export default App;

function TimerSlot({ index, timer, updateTimers }) {
  const [time, setTime] = useState(timer.time);
  const [text, setText] = useState(timer.text);

  // it is better to only update the whole array onblur which is when
  // when the input is clicked out of, because then the whole array
  // doesn't need to be updated on every keystroke, but is still updated
  function handleBlur() {
    updateTimers(index, time, text);
  };

  return (
    <form className="timer" key={index}>
      <input
        type="number"
        value={time}
        onChange={e => setTime(e.target.value)}
        onBlur={handleBlur}
      />
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        onBlur={handleBlur}
      />
    </form>
  )
};