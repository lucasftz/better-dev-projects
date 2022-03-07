import React from 'react';

function Scoreboard({ correct, incorrect }) {
  return (
    <div className="scoreboard">
      <div className="wrong">
        <strong>{incorrect}</strong>
        <span>wrong</span>
      </div>
      <div className="correct">
        <strong>{correct}</strong>
        <span>correct</span>
      </div>
    </div>
  );
}

export default Scoreboard