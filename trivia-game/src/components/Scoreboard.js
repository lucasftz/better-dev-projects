import React, { useState, useEffect } from 'react';

function Scoreboard({ isCorrect }) {
  const [correctScore, setCorrectScore] = useState(0);
  const [incorrectScore, setIncorrectScore] = useState(0);

  useEffect(() => {
    // do not run if we have not answered yet
    if (isCorrect===null) return;

    if (isCorrect) {
      setCorrectScore(score => score + 1);
    } else {
      setIncorrectScore(score => score + 1);
    };
  }, [isCorrect]);

  return (
    <div className="scoreboard">
      <div className="wrong">
        <strong>{incorrectScore}</strong>
        <span>wrong</span>
      </div>
      <div className="correct">
        <strong>{correctScore}</strong>
        <span>correct</span>
      </div>
    </div>
  );
}

export default Scoreboard