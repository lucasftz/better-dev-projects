import React, { useState } from 'react';
import useTrivia from './useTrivia';
import './App.css';
// components
import Question from './components/Question';
import CategorySelector from './components/CategorySelector';
import ResultModal from './components/ResultModal';
import Scoreboard from './components/Scoreboard';

function App() {
  const { questionData, getQuestion, category, setCategory } = useTrivia();
  const [isCorrect, setIsCorrect] = useState(null);

  function handleQuestionAnswered(answer) {
    const isAnswerCorrect = answer === questionData.correct_answer;
    setIsCorrect(isAnswerCorrect);
  };

  function handleNextQuestion() {
    setIsCorrect(null);
    getQuestion();
  };

  return (
    <div className="app">
      {/* show the result modal ----------------------- */}
      {isCorrect!==null &&
        <ResultModal
          isCorrect={isCorrect}
          questionData={questionData}
          getQuestion={handleNextQuestion}
        />
      }

      {/* question header ----------------------- */}
      <div className="question-header">
        <CategorySelector
          category={category}
          chooseCategory={setCategory}
        />
        <Scoreboard isCorrect={isCorrect} />
      </div>

      {/* the question itself ----------------------- */}
      <div className="question-main">
        {questionData && <Question questionData={questionData} answerQuestion={handleQuestionAnswered} />}
      </div>

      {/* question footer ----------------------- */}
      <div className="question-footer">
        <button onClick={handleNextQuestion}>Go to next question 👉</button>
      </div>
    </div>
  );
}

export default App;
