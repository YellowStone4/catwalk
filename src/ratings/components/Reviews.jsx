import React, {useState, useEffect} from 'react';
import ReviewSort from './reviewComponents/ReviewSort.jsx';
import ListOfReviews from './reviewComponents/ListOfReviews.jsx';
import ReviewButtons from './reviewComponents/ReviewButtons.jsx'

const Reviews = (props) => {


  return (
    <div>
      <ReviewSort changeSort={props.changeSort} metaData={props.metaData} reviews={props.reviews}/>
      <ListOfReviews starSort={props.starSort} reviews={props.reviews} product={props.product}/>
      <ReviewButtons changeCount={props.changeCount}/>
    </div>
  )

}

export default Reviews;