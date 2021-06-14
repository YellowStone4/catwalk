import React from 'react'
import Question from './Question.jsx'

const QuestionList = ({questions, update}) => {
  return (
    <section>
      {questions.map((question) => <Question key={question.question_id} question={question} update={update} />)}
    </section>
  )
}

export default QuestionList