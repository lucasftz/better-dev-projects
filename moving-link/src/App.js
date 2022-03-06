import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const canvasReference = useRef(null);

  useEffect(() => {
    // set the dimensions of the canvas to the screen on the initial render
    const context = canvasReference.current.getContext('2d');
    context.canvas.height = window.innerHeight;
    context.canvas.width = window.innerWidth;

    context.fillRect(0, 0, 100, 100);
  }, [])

  return (
    <div className="app">
      <canvas ref={canvasReference} />

      <div className="arrows">
        <button>Up</button>
        <button>Left</button>
        <button>Down</button>
        <button>Right</button>
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
