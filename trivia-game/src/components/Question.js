import React from 'react';

function Question({ questionData }) {
  const answers = [...questionData.incorrect_answers, questionData.correct_answer];

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