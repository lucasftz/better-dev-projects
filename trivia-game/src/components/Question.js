import React from 'react';
import shuffle from 'lodash.shuffle';

function Question({ questionData }) {
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
        <button key={index}>{answer}</button>
      ))}
    </div>
  );
}

export default Question