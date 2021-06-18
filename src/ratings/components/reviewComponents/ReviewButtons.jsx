import React, {useState, useEffect} from 'react';
import ReviewModal from './individualReviewComps/CreateReviewModal.jsx';
import styles from './review.css';

const ReviewButtons = (props) => {
  const addCount = () => {
    props.changeCount();
  }

  const [addingQuestion, setAddingQuestion] = useState(false)

  const submit = (data) => {
    console.log('submitted')
    console.log('submit data: ', data);
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
    border: '2px solid rgba(52, 63, 86, 0.9)',
    color: 'rgba(52, 63, 86, 0.9)',
    //backgroundColor: 'white',
    backgroundImage: 'linear-gradient(white, rgba(251, 147, 0, 0.45)  )'
  }
//rgba(251, 147, 0, 0.45)
//rgba(52, 63, 86, 0.9)


  return (
    <div style={{display: 'inline-block'}}>
      <button className="button" style={buttonStyling} onClick={addCount}>MORE REVIEWS</button>
      {addingQuestion && <ReviewModal metaData={props.metaData} product={props.product} submit={submit} cancel={cancel}/>}

      <button className="button" style={buttonStyling} onClick={() => setAddingQuestion(true)}>ADD A REVIEW</button>

    </div>
  )
}

export default ReviewButtons;