import React from 'react'
import Question from './Question.jsx'

const QuestionList = ({questions}) => {
  return (
    <ul>
      {questions.map((question) => <Question key={question.question_id} question={question} />)}
    </ul>
  )
}

export default QuestionList