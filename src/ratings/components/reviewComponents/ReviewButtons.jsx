import React, {useState, useEffect} from 'react';
import ReviewModal from './individualReviewComps/CreateReviewModal.jsx';

const ReviewButtons = (props) => {
  const addCount = () => {
    props.changeCount();
  }

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
    <div>
      <button onClick={addCount}>MORE REVIEWS</button>
      {addingQuestion && <ReviewModal metaData={props.metaData} product={props.product} submit={submit} cancel={cancel}/>}
      <div>
      <button onClick={() => setAddingQuestion(true)}>Add a question</button>
      </div>
    </div>
  )
}

export default ReviewButtons;