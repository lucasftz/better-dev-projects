import React from 'react';

function ResultModal({ isCorrect, questionData, getQuestion }) {
  return (
    <div className={`result-modal ${isCorrect ? 'is-correct' : 'is-wrong'}`}>
      <div className="overlay" />
      <div className="result-modal-content">
        {isCorrect &&
          <h3>
            👊👊👊
            <br />
            YOU WON!
          </h3>
        }
        {isCorrect ||
          <>
            <h3>
              😟😢😟
              <br />
              YOU LOST!
            </h3>
          
            <div className="correct-answer">
              <small>The correct answer was:</small>
              <br />
              <strong
                dangerouslySetInnerHTML={{__html: questionData.correct_answer}}>
              </strong>
            </div>
          </>
        }

        <button onClick={getQuestion}>Go to next question 👉</button>
      </div>
    </div>
  );
}

export default ResultModal