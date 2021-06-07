import React from 'react'
import Answer from './Answer.jsx'

const Question = ({question}) => {
  const answers = Object.values(question.answers)
  return (
    <section>
      <strong>Q: {question.question_body}</strong>
      <section>
        {answers.map(answer => <Answer key={answer.id} answer={answer}/>)}
      </section>
    </section>
  )
}

export default Question