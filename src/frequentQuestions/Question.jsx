import React, {useState} from 'react'
import Answer from './Answer.jsx'

const Question = ({question, update}) => {
  const [numberOfVisibleAnswers, setNumberOfVisibleAnswers] = useState(2)
  const answers = Object.values(question.answers)
  answers.sort((a, b) => {
    if( a.answerer_name === 'Seller' || b.helpfulness <= a.helpfulness) {
      return -1
    }
    if( b.answerer_name === 'Seller' || b.helpfulness > a.helpfulness) {
      return 1
    }
  })
  let visibleAnswers = answers.slice(0, numberOfVisibleAnswers)

  function loadMoreAnswers() {
    setNumberOfVisibleAnswers(numberOfVisibleAnswers + 2)
  }

  function collapseAnswers() {
    setNumberOfVisibleAnswers(2)
  }

  return (
    <section>
      <strong>Q: {question.question_body} </strong>
      <span> Helpful? <a href="">Yes</a> ({question.question_helpfulness}) | <a href=""> Add Answer</a></span>

      {answers.length > 0 &&
        <section>
          <strong>A: </strong>{visibleAnswers.map(answer => <Answer key={answer.id} answer={answer} update={update}/>)}
        </section>
      }

      {visibleAnswers.length < answers.length &&
        <strong onClick={loadMoreAnswers}>Load More Answers</strong>
      }
      {visibleAnswers.length > 2 && visibleAnswers.length === answers.length &&
        <strong onClick={collapseAnswers}>Collapse Answers</strong>
      }
    </section>
  )
}

export default Question