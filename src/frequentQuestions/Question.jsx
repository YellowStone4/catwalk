import React, {useState} from 'react'
import Answer from './Answer.jsx'

const Question = ({question}) => {
  const [numberOfVisibleAnswers, setNumberOfVisibleAnswers] = useState(2)
  const answers = Object.values(question.answers)
  let visibleAnswers = answers.slice(0, numberOfVisibleAnswers)

  function loadMoreAnswers() {
    setNumberOfVisibleAnswers(numberOfVisibleAnswers + 2)
  }

  function collapseAnswers() {
    setNumberOfVisibleAnswers(2)
  }

  return (
    <section>
      <strong>Q: {question.question_body}</strong> <br/>
      <button> Add Answer </button>
      <span> Helpful? Yes ({question.question_helpfulness}) </span>
      {answers.length > 0 &&
        <section>
          <strong>A: </strong>{visibleAnswers.map(answer => <Answer key={answer.id} answer={answer}/>)}
        </section>
      }
      {visibleAnswers.length < answers.length &&
        <strong onClick={loadMoreAnswers}>Load More Answers</strong>
      }
      {visibleAnswers.length === answers.length &&
        <strong onClick={collapseAnswers}>Collapse Answers</strong>
      }
    </section>
  )
}

export default Question