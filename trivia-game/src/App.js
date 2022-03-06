import React, { useState, useEffect } from 'react';
import './App.css';
// components
import Question from './components/Question';
import CategorySelector from './components/CategorySelector';
import ResultModal from './components/ResultModal';
import Scoreboard from './components/Scoreboard';

function App() {
  const [questionData, setQuestionData] = useState(null);

  useEffect(() => {
    getQuestion();
  }, []);

  const getQuestion = () => {
    const url = `https://opentdb.com/api.php?amount=1`;

    fetch(url
      ).then(res => res.json()
      ).then(data => setQuestionData(data.results[0])
      )
  }

  return (
    <div className="app">
      {/* show the result modal ----------------------- */}
      {/* <ResultModal /> */}

      {/* question header ----------------------- */}
      <div className="question-header">
        <CategorySelector />
        <Scoreboard />
      </div>

      {/* the question itself ----------------------- */}
      <div className="question-main">
        {questionData && <Question questionData={questionData} />}
      </div>

      {/* question footer ----------------------- */}
      <div className="question-footer">
        <button>Go to next question 👉</button>
      </div>
    </div>
  );
}

export default App;
