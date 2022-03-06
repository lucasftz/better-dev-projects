import { useState, useEffect } from 'react';

const useMovement = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [direction, setDirection] = useState('down');

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
  };

  return { x, y, direction, move };
};

export default useMovement