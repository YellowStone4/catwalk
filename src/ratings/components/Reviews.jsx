import React, {useState, useEffect} from 'react';
import ReviewSort from './reviewComponents/ReviewSort.jsx';
import ListOfReviews from './reviewComponents/ListOfReviews.jsx';
import ReviewButtons from './reviewComponents/ReviewButtons.jsx'

const Reviews = (props) => {


  return (
    <div>
      <h2>Reviews</h2>
      <ReviewSort metaData={props.metaData} reviews={props.reviews}/>
      <ListOfReviews reviews={props.reviews} product={props.product}/>
      <ReviewButtons />
    </div>
  )

}

export default Reviews;