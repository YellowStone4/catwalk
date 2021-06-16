import React, {useState} from 'react'
import Question from './Question.jsx'
import AddQuestion from './AddQuestion.jsx'

const QuestionList = ({questions, update, product}) => {
  const [numberOfVisibleQuestions, setNumberOfVisibleQuestions] = useState(2)
  const visibleQuestions = questions.slice(0, numberOfVisibleQuestions)
  const loadMoreQuestions = () => setNumberOfVisibleQuestions(numberOfVisibleQuestions+2)
  const collapseQuestions = () => setNumberOfVisibleQuestions(2)
  const loadMoreQuesBtn = <button onClick={loadMoreQuestions}>Load More Questions</button>
  const collapseQuesBtn = <button onClick={collapseQuestions}>Collapse Questions</button>

  const [addingQuestion, setAddingQuestion] = useState(false)
  const submit = () => {
    console.log('submitted')
    setAddingQuestion(false)
  }
  const cancel = (e) => {
    e.preventDefault()
    // console.log(e.target)
    if(e.target.className == 'modal') {
      setAddingQuestion(false)
    }
  }

  return (
    <>
      <section className="questionList">
        {visibleQuestions.map((question) => <Question key={question.question_id} question={question} update={update} />)}
      </section>
        {visibleQuestions.length < questions.length && loadMoreQuesBtn}
        {visibleQuestions.length > 2 && visibleQuestions.length === questions.length && collapseQuesBtn}
        {addingQuestion && <AddQuestion submit={submit} cancel={cancel} product={product}/>}
      <button onClick={()=>setAddingQuestion(true)}>Add a Question</button>
    </>
  )
}

export default QuestionList