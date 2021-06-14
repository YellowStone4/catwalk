import React, {useState} from 'react'
import Answer from './Answer.jsx'
import { API_KEY } from '../../config'

const Question = ({question, update}) => {
  const [votedHelpful, setVotedHelpful] = useState(false)
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

  const loadMoreAnswers = () => setNumberOfVisibleAnswers(numberOfVisibleAnswers + 2)
  const collapseAnswers = () => setNumberOfVisibleAnswers(2)
  const collapse = <strong onClick={collapseAnswers}>Collapse Answers</strong>
  const loadMore = <strong onClick={loadMoreAnswers}>Load More Answers</strong>

  const handleHelpful = () => {
    if(!votedHelpful) {
      fetch(new Request(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${question.question_id}/helpful`,
      {
        method: 'PUT',
        headers: {
          Authorization: API_KEY
        }
      }))
      .then(update)
      .then(setVotedHelpful(true))
    }
  }

  return (
    <section>
      <strong>Q: {question.question_body} </strong>
      <span> Helpful? <a onClick={handleHelpful}>Yes</a> ({question.question_helpfulness}) | <a> Add Answer</a></span>

      {answers.length > 0 &&
        <section>
          <strong>A: </strong>{visibleAnswers.map(answer => <Answer key={answer.id} answer={answer} update={update}/>)}
        </section>
      }
      {visibleAnswers.length < answers.length && loadMore}
      {visibleAnswers.length > 2 && visibleAnswers.length === answers.length && collapse}
      <hr />
    </section>
  )
}

export default Question