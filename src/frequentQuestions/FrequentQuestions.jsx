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

  const [numberOfVisibleQuestions, setNumberOfVisibleQuestions] = useState(2)
  const visibleQuestions = searchedQuestions.slice(0, numberOfVisibleQuestions)
  const loadMoreQuestions = () => setNumberOfVisibleQuestions(numberOfVisibleQuestions+2)
  const collapseQuestions = () => setNumberOfVisibleQuestions(2)
  const loadMoreQuesBtn = <button onClick={loadMoreQuestions}>More Answered Questions</button>
  const collapseQuesBtn = <button onClick={collapseQuestions}>Collapse Questions</button>

  const [addingQuestion, setAddingQuestion] = useState(false)


  useEffect(() => {
    fetchQuestions()
  }, [product]);

  const fetchQuestions = () => {
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?product_id=${product.id}`;
    // const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?product_id=19096`;
    const config = {
      params: {
        count: 10
      },
      headers: {
        Authorization: API_KEY,
      },
    };
    axios.get(url, config)
      .then((res) => setQuestions(res.data.results));

  }

  return (
    <>
      <header>
      <h2 className="section-title">Frequent Questions</h2>
      </header>
      <section className="frequent-questions">
        <main>
          <Search search={setSearchInput}/>
          <QuestionList questions={searchedQuestions} visibleQuestions={visibleQuestions} update={fetchQuestions} product={product} addingQuestion={addingQuestion} setAddingQuestion={setAddingQuestion}/>
        </main>
        <footer className="questions-footer">
            {visibleQuestions.length < searchedQuestions.length && loadMoreQuesBtn}
          {visibleQuestions.length > 2 && visibleQuestions.length === searchedQuestions.length && collapseQuesBtn}
          <button onClick={()=>setAddingQuestion(true)}>Add a Question</button>
          </footer>
      </section>
    </>
  );
}

export default FrequentQuestions;
