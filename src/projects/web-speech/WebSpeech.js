import React, { useState, useEffect, useCallback } from 'react';
import { useStopwatch } from 'react-timer-hook';
import { useSpeechSynthesis } from 'react-speech-kit';
import './WebSpeech.css';

function WebSpeech() {
  const [timers, setTimers] = useState([
    {time: 1, text: "Press the button and hear the text!"}
  ]);
  const { seconds, isRunning, start, reset } = useStopwatch({});
  const { speak, speaking, supported } = useSpeechSynthesis();

  const doReset = useCallback(() => reset(0, false), [reset]);
  const doSpeak = useCallback((...p) => speak(...p), [speak]);

  useEffect(() => {
    const foundTimer = timers.find(t => t.time === seconds);
    if (foundTimer) doSpeak({text: foundTimer.text});

    // check if seconds is greater than the last timers time
    if (seconds > timers[timers.length - 1].time) doReset();
  }, [seconds, timers, doSpeak, doReset]);

  function updateTimers(index, time, text) {
    const newTimers = [...timers];
    newTimers[index].time = time;
    newTimers[index].text = text;

    setTimers(newTimers);
  };

  function addTimer() {
    const newTimers = [...timers, {time: 100, text: "Edit me!"}];
    setTimers(newTimers);
  };

  if (!supported) return <div>Your browser is not supported :( Sorry!</div>;

  return (
    <div className="web-speech">
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
        <button className="stop-button" onClick={() => reset(0, false)}>Stop</button>}

        {speaking && <p>I am speaking</p>}
      </div>
    </div>
  );
}

export default WebSpeech;

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
        onChange={e => setTime(+e.target.value)}
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