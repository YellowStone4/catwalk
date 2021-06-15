import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarCount from './individualReviewComps/StarCount.jsx';
import ReviewDate from './individualReviewComps/ReviewDate.jsx';
import style from './reviewStyles.js';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

const Review = (props) => {
  return (
    <div style={{margin: '30px'}}>
      <div style={{clear: 'both'}}>
        <div style={{float: 'left'}}>
          <StarCount key={props.review.review_id} id={props.review.review_id} starNumber={props.review.rating}/>
        </div>
        <div style={{float: 'right'}}>
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

      <div style={{backgroundColor: 'grey', padding: '5px'}}>
        <h4>Response:</h4>
        <p>Convert to stateful</p>
      </div>
      <div>
        <span>Was this review helpful? </span>
        <span>Yes  ({props.review.helpfulness})  </span>
        <span>|</span>
        <span>  Report</span>
      </div>
      <hr></hr>
    </div>
  )
}

export default Review;