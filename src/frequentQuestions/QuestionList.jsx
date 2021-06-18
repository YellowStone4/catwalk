import React, {useState} from 'react'
import axios from 'axios'
import Question from './Question.jsx'
import AddQuestion from './AddQuestion.jsx'
import { API_KEY } from '../../config'

const QuestionList = ({product, questions, visibleQuestions, update, addingQuestion, setAddingQuestion}) => {


  const submit = ({question, nickname, email}) => {
    axios({
      method: 'post',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions`,
      headers: {
        Authorization: API_KEY,
      },
      data: {
        body: question,
        name: nickname,
        email: email,
        product_id: product.id
      }
    })
    .then(success => {
      console.log(success)
      update()
      setAddingQuestion(false)
    })
    .catch(err => console.log(err))
  }

  const cancel = (e) => {
    e.preventDefault()
    // console.log(e.target)
    if(e.target.className == 'modal') {
      setAddingQuestion(false)
    }
  }

  return (
    <>
      {addingQuestion && <AddQuestion submit={submit} cancel={cancel} product={product}/>}
      <section className="question-list">
        <main>
          {visibleQuestions.map((question) => (
            <Question
              key={question.question_id}
              product={product}
              question={question}
              update={update}
            />
          ))}
        </main>

      </section>
    </>
  )
}

export default QuestionList