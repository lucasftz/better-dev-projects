import React from 'react';
import shuffle from 'lodash.shuffle';

function Question({ questionData, answerQuestion }) {
  const answers = shuffle([
    ...questionData.incorrect_answers,
    questionData.correct_answer
  ]);

  return (
    <div className="question">
      <h2
        dangerouslySetInnerHTML={{
          __html: questionData.question
        }}
      />

      {answers.map((answer, index) => (
        <button
          key={index}
          onClick={() => answerQuestion(answer)}
          dangerouslySetInnerHTML={{__html: answer}}>
        </button>
      ))}
    </div>
  );
}

export default Question