import { useState, useEffect, useCallback } from 'react';

const useTrivia = () => {
  const [questionData, setQuestionData] = useState(null);
  const [category, setCategory] = useState('any');

  const getQuestion = useCallback(() => {
    let url = 'https://opentdb.com/api.php?amount=1';
    if (category!=='any') url += `&category=${category}`;

    fetch(url
      ).then(res => res.json()
      ).then(data => setQuestionData(data.results[0])
      );
  }, [category]);

  useEffect(() => {
    getQuestion();
  }, [getQuestion, category]);

  return { questionData, category, setCategory, getQuestion };
};

export default useTrivia