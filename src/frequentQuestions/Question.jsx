import React, {useState} from 'react'
import Answer from './Answer.jsx'
import AddAnswer from './AddAnswer.jsx'
import { API_KEY } from '../../config'

const Question = ({product, question, update}) => {
  // Functionality to load more answers
  const answers = Object.values(question.answers)
  answers.sort((a, b) => {
    if( a.answerer_name === 'Seller' || b.helpfulness <= a.helpfulness) return -1
    if( b.answerer_name === 'Seller' || b.helpfulness > a.helpfulness) return 1
  })
  const [numberOfVisibleAnswers, setNumberOfVisibleAnswers] = useState(2)
  const visibleAnswers = answers.slice(0, numberOfVisibleAnswers)
  const loadMoreAnswers = () => setNumberOfVisibleAnswers(numberOfVisibleAnswers + 2)
  const collapseAnswers = () => setNumberOfVisibleAnswers(2)
  const loadMoreAnswersBtn = <strong onClick={loadMoreAnswers}>Load More Answers</strong>
  const collapseAnswersBtn = <strong onClick={collapseAnswers}>Collapse Answers</strong>


  //Handling functionality to Vote Question Helpful
  const [votedHelpful, setVotedHelpful] = useState(false)
  const handleVotedHelpful = () => {
    if(!votedHelpful) {
      fetch(
        new Request(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${question.question_id}/helpful`,
        {
          method: 'PUT',
          headers: {
            Authorization: API_KEY
          }
        })
      )
      .then(update)
      .then(setVotedHelpful(true))
    }
  }

  // Functionality to Add a new Answer
  const [addingAnswer, setAddingAnswer] = useState(false)
  const submit = () => {
    setAddingAnswer(false)
  }

  return (
    <section>
      <strong>Q: {question.question_body} </strong>
      <span>
        Helpful?
        <a onClick={handleVotedHelpful}>Yes</a>
        ({question.question_helpfulness}) |
        <a onClick={()=>setAddingAnswer(true)}> Add Answer</a>
      </span>

      {answers.length > 0 &&
        <section>
          <strong>A: </strong>{visibleAnswers.map(answer => <Answer key={answer.id} answer={answer} update={update}/>)}
        </section>
      }
      {visibleAnswers.length < answers.length && loadMoreAnswersBtn}
      {visibleAnswers.length > 2 && visibleAnswers.length === answers.length && collapseAnswersBtn}
      {addingAnswer && <AddAnswer submit={submit} product={product} question={question}/>}
      <hr />
    </section>
  )
}

export default Question