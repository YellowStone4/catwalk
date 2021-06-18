import React, {useState, useEffect} from 'react';
import ReviewModal from './individualReviewComps/CreateReviewModal.jsx';
import styles from './review.css';

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

  const buttonStyling = {
    display: 'inline-block',
    padding: '10px',
    margin: '0px 20px',
    backgroundColor: 'white'
  }

  return (
    <div style={{display: 'inline-block'}}>
      <button className="button" style={buttonStyling} onClick={addCount}>MORE REVIEWS</button>
      {addingQuestion && <ReviewModal metaData={props.metaData} product={props.product} submit={submit} cancel={cancel}/>}

      <button className="button" style={buttonStyling} onClick={() => setAddingQuestion(true)}>ADD A REVIEW</button>

    </div>
  )
}

export default ReviewButtons;