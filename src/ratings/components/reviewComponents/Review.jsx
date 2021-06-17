import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarCount from './individualReviewComps/StarCount.jsx';
import ReviewDate from './individualReviewComps/ReviewDate.jsx';
import PhotoDisplay from './individualReviewComps/PhotoDisplay.jsx';
import style from './reviewStyles.js';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import styles from './review.css'
const {API_KEY} = require('../../../../config.js');

const Review = (props) => {
  console.log('props in Review.jsx: ', props);
  const [helpfulCount, setHelpfulCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [helpClicked, setHelpClicked] = useState(false);

  const helpfulClick = () => {
    if (helpClicked === false) {
      var options = {
        method: 'put',
        headers: {
          'Authorization': API_KEY
        },
        url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/' + props.review.review_id + '/helpful'
        // body: {
        //   'review_id': props.product.id
        // }
      }
      axios(options).then((response) => {
        props.setCounter(Math.random());
        setHelpClicked(true);

      }).catch((err) => {
        console.log('Err from put request: ', err);
        props.setCounter(Math.random());

      })
    }
  }

  const reportClick = () => {
    var options = {
      method: 'put',
      headers: {
        'Authorization': API_KEY
      },
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/' + props.review.review_id + '/report'
    }
    axios(options).then((response) => {
      props.setCounter(Math.random());

    }).catch((err) => {
      console.log('Err from report: ', err);
    })
  }

  useEffect(() => {
    setHelpfulCount(props.review.helpfulness)
  }, [props, timer]);




  return (
    <div style={{margin: '30px'}}>
      <div style={{clear: 'both'}}>
        <div style={{float: 'left'}}>
          <StarCount key={props.review.review_id} id={props.review.review_id} starNumber={props.review.rating}/>
        </div>
        <div style={{display: 'inline'}} style={{float: 'right'}}>
          <span style={{display: 'inline'}}>{props.review.reviewer_name},  </span>
          <ReviewDate date={props.review.date}/>
        </div>
      </div>
      <div style={{clear: 'both'}}>
        <h2>{props.review.summary}</h2>
      </div>
      <p>{props.review.body}</p>

      {props.review.recommend ? <div>
        <span><FontAwesomeIcon icon={faCheck} /></span>
        <span>  I recommend this product</span>
      </div> : <span></span>}

      {props.review.photos.length ?
      props.review.photos.map((photo) => {
        return <PhotoDisplay key={photo.id} photo={photo} />
      })
      : <span></span>}
      {props.review.response !== null &&
        <div style={{backgroundColor: '#D3D3D3', margin: '5px 0px', padding: '3px 10px'}}>
          <h4 style={{fontWeight: 'bold', margin: '10px 0px'}}>Response:</h4>
          <p>{props.review.response}</p>
        </div>
      }


      <div>
        <span>Helpful? </span>
        <span className="button" onClick={helpfulClick}>Yes  ({helpfulCount})  </span>
        <span>|</span>
        <span className="button" onClick={reportClick}>  Report</span>
      </div>
      <hr></hr>
    </div>
  )
}

export default Review;