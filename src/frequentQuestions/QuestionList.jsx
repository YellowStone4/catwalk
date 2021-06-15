import React, {useState} from 'react'
import Question from './Question.jsx'

const QuestionList = ({questions, update}) => {
  const [numberOfVisibleQuestions, setNumberOfVisibleQuestions] = useState(2)
  let visibleQuestions = questions.slice(0, numberOfVisibleQuestions)

  const loadMoreQuestions = () => setNumberOfVisibleQuestions(numberOfVisibleQuestions+2)
  const collapseQuestions = () => setNumberOfVisibleQuestions(2)
  const loadMore = <button onClick={loadMoreQuestions}>Load More Questions</button>
  const collapse = <button onClick={collapseQuestions}>Collapse Questions</button>

  return (
    <section>
      {visibleQuestions.map((question) => <Question key={question.question_id} question={question} update={update} />)}
      {visibleQuestions.length < questions.length && loadMore}
      {visibleQuestions.length > 2 && visibleQuestions.length === questions.length && collapse}
      <button>Add a Question</button>
    </section>
  )
}

export default QuestionList