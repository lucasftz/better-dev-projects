import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
// components
import Question from './components/Question';
import CategorySelector from './components/CategorySelector';
import ResultModal from './components/ResultModal';
import Scoreboard from './components/Scoreboard';

function App() {
  const [questionData, setQuestionData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(`any`);
  const [isCorrect, setIsCorrect] = useState(null);

  const getQuestion = useCallback(() => {
    setIsCorrect(null);
    let url = 'https://opentdb.com/api.php?amount=1';
    if (selectedCategory!=='any') url += `&category=${selectedCategory}`;

    fetch(url
      ).then(res => res.json()
      ).then(data => setQuestionData(data.results[0])
      );
  }, [selectedCategory]);

  useEffect(() => {
    getQuestion();
  }, [getQuestion, selectedCategory]);

  function handleQuestionAnswered(answer) {
    const isAnswerCorrect = answer === questionData.correct_answer;
    setIsCorrect(isAnswerCorrect);
  };

  return (
    <div className="app">
      {/* show the result modal ----------------------- */}
      {isCorrect!==null &&
        <ResultModal
          isCorrect={isCorrect}
          questionData={questionData}
          getQuestion={getQuestion}
        />
      }

      {/* question header ----------------------- */}
      <div className="question-header">
        <CategorySelector
          category={selectedCategory}
          chooseCategory={setSelectedCategory}
        />
        <Scoreboard />
      </div>

      {/* the question itself ----------------------- */}
      <div className="question-main">
        {questionData && <Question questionData={questionData} answerQuestion={handleQuestionAnswered} />}
      </div>

      {/* question footer ----------------------- */}
      <div className="question-footer">
        <button onClick={getQuestion}>Go to next question 👉</button>
      </div>
    </div>
  );
}

export default App;
