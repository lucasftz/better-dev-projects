import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const canvasReference = useRef(null);
  const linkDownRef = useRef(null);
  const linkUpRef = useRef(null);
  const linkLeftRef = useRef(null);
  const linkRightRef = useRef(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [direction, setDirection] = useState('down');

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
    // context.fillRect(x, y, 100, 100);

    let theLinkRef;
    if (direction === 'up') theLinkRef = linkUpRef;
    if (direction === 'left') theLinkRef = linkLeftRef;
    if (direction === 'down') theLinkRef = linkDownRef;
    if (direction === 'right') theLinkRef = linkRightRef;
    context.drawImage(theLinkRef.current, x, y);
  }, [x, y]);

  // add event listener to window to listen for arrow keys
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    function handleKeyDown(e) {
      if (e.key === 'w') move('up');
      if (e.key === 'a') move('left');
      if (e.key === 's') move('down');
      if (e.key === 'd') move('right');
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const move = (direction) => {
    setDirection(direction);
    if (direction === 'up') setY(y => y - 20);
    if (direction === 'left') setX(x => x - 20);
    if (direction === 'down') setY(y => y + 20);
    if (direction === 'right') setX(x => x + 20);
  }

  return (
    <div className="app">
      <canvas ref={canvasReference} />

      <div className="arrows">
        <button onClick={() => move('up')}>Up</button>
        <button onClick={() => move('left')}>Left</button>
        <button onClick={() => move('down')}>Down</button>
        <button onClick={() => move('right')}>Right</button>
      </div>

      <div className="images">
        <img ref={linkDownRef} src="https://i.imgur.com/JYUB0m3.png" alt="Down" />
        <img ref={linkRightRef} src="https://i.imgur.com/GEXD7bk.gif" alt="Right" />
        <img ref={linkUpRef} src="https://i.imgur.com/XSA2Oom.gif" alt="Up" />
        <img ref={linkLeftRef} src="https://i.imgur.com/4LGAZ8t.gif" alt="Left" />
      </div>
    </div>
  );
}

export default App;
