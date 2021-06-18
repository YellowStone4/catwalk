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
  const loadMoreAnswersBtn = <a onClick={loadMoreAnswers}>Load More Answers</a>
  const collapseAnswersBtn = <a onClick={collapseAnswers}>Collapse Answers</a>


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
  const submit = (data) => {
    console.log(data)
    fetch(
      new Request(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${question.question_id}/answers`,
      {
        method: 'POST',
        headers: {
          Authorization: API_KEY,
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    )
    .then(res => {
      update()
    })
    setAddingAnswer(false)
  }
  const cancel = (e) => {
    e.preventDefault()
    if(e.target.className == 'modal') {
      setAddingAnswer(false)
    }
  }

  return (
    <div className="question">
      <article>
        {addingAnswer && <AddAnswer submit={submit} product={product} question={question} cancel={cancel}/>}
        <header className="title">
          <strong>Q : </strong>
          <span> {question.question_body} </span>
       </header>
        {answers.length > 0 &&
          <section className="answer">
            <header><strong>A : </strong></header>
            <main>
              {visibleAnswers.map(answer => (
                <Answer
                  key={answer.id}
                  answer={answer}
                  update={update}
                />
              ))}
              {visibleAnswers.length < answers.length && loadMoreAnswersBtn}
              {visibleAnswers.length > 2 && visibleAnswers.length === answers.length && collapseAnswersBtn}
            </main>
          </section>
        }
      </article>
      <aside>
        <header>Helpful?
          <a onClick={handleVotedHelpful}><u> Yes </u></a>
          ({question.question_helpfulness}) |
          <a onClick={()=>setAddingAnswer(true)}><u> Add Answer </u></a>
        </header>
      </aside>
    </div>
  )
}

export default Question