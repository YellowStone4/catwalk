import React, {useState} from 'react'
import Answer from './Answer.jsx'

const Question = ({question}) => {
  const [numberOfVisibleAnswers, setNumberOfVisibleAnswers] = useState(2)
  const answers = Object.values(question.answers)
  let visibleAnswers = answers.slice(0, numberOfVisibleAnswers)

  function loadMoreAnswers() {
    setNumberOfVisibleAnswers(numberOfVisibleAnswers + 2)
  }

  return (
    <section>
      <strong>Q: {question.question_body}</strong>
      <section>
        {visibleAnswers.map(answer => <Answer key={answer.id} answer={answer}/>)}
      </section>
      <strong onClick={loadMoreAnswers}>Load More Answers</strong>
    </section>
  )
}

export default Question