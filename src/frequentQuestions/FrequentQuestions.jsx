import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../../config.js';

function FrequentQuestions({product}) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?product_id=${product.id}`;
    const config = {
      headers: {
        Authorization: API_KEY,
      },
    };
    axios.get(url, config)
      .then((res) => setQuestions(res.data.results));
  }, []);

  return (
    <>
      <h1>Frequent Questions</h1>
      <ul>
        {questions.map((question) => <li key={question.question_id}>{question.question_body}</li>)}
      </ul>
    </>
  );
}

export default FrequentQuestions;
