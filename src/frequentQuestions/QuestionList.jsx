import React from 'react'
import Question from './Question.jsx'

const QuestionList = ({questions}) => {
  console.log(questions)

  return (
    <section>
      {questions.map((question) => <Question key={question.question_id} question={question} />)}
    </section>
  )
}

export default QuestionList