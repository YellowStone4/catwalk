import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'
import QuestionList from './QuestionList.jsx'
import Search from './Search.jsx'
import { API_KEY } from '../../config';

function FrequentQuestions({product}) {
  const [questions, setQuestions] = useState([]);
  const [searchInput, setSearchInput] = useState('')
  let searchedQuestions = questions.filter(question => question.question_body.toLowerCase().includes(searchInput))

  useEffect(() => {
    fetchQuestions()
  }, []);

  const fetchQuestions = () => {
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?product_id=${product.id}`;
    // const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?product_id=19096`;
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
      <Search search={setSearchInput}/>
      <QuestionList questions={searchedQuestions} update={fetchQuestions} product={product}/>
    </>
  );
}

export default FrequentQuestions;
