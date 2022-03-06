import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const canvasReference = useRef(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // set the dimensions of the canvas to the screen on the initial render
  useEffect(() => {
    const context = canvasReference.current.getContext('2d');
    context.canvas.height = window.innerHeight;
    context.canvas.width = window.innerWidth;
  }, []);

  // move the box if x or y changes
  useEffect(() => {
    const context = canvasReference.current.getContext('2d');
    context.clearRect(0, 0, window.innerHeight, window.innerWidth);
    context.fillRect(x, y, 100, 100);
  }, [x, y]);

  return (
    <div className="app">
      <canvas ref={canvasReference} />

      <div className="arrows">
        <button onClick={() => setY(y => y - 20)}>Up</button>
        <button onClick={() => setX(x => x - 20)}>Left</button>
        <button onClick={() => setY(y => y + 20)}>Down</button>
        <button onClick={() => setX(x => x + 20)}>Right</button>
      </div>

      <div className="images">
        <img src="https://i.imgur.com/JYUB0m3.png" alt="Down" />
        <img src="https://i.imgur.com/GEXD7bk.gif" alt="Right" />
        <img src="https://i.imgur.com/XSA2Oom.gif" alt="Up" />
        <img src="https://i.imgur.com/4LGAZ8t.gif" alt="Left" />
      </div>
    </div>
  );
}

export default App;
