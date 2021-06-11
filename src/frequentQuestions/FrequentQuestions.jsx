import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question.jsx'
import Search from './Search.jsx'
import { API_KEY } from '../../config';

function FrequentQuestions({product}) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions()
  }, []);

  const fetchQuestions = () => {
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?product_id=${product.id}`;
    // const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?product_id=19088`;
    const config = {
      headers: {
        Authorization: API_KEY,
      },
    };
    axios.get(url, config)
      .then((res) => setQuestions(res.data.results));

  }

  return (
    <>
      <h1>Frequent Questions</h1>
      <Search />
      <section>
        {questions.map((question) => <Question key={question.question_id} question={question} update={fetchQuestions}/>)}
      </section>
    </>
  );
}

export default FrequentQuestions;
