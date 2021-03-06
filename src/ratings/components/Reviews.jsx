import React, {useState, useEffect} from 'react';
import ReviewSort from './reviewComponents/ReviewSort.jsx';
import ListOfReviews from './reviewComponents/ListOfReviews.jsx';
import ReviewButtons from './reviewComponents/ReviewButtons.jsx'

const Reviews = (props) => {


  const [reviewCount, setCountReview] = useState(2);

  const changeCount = () => {
    setCountReview(reviewCount + 2);
  }




  return (
    <div style={{backgroundColor:'rgb(245, 230, 202)'}}>
      <ReviewSort changeSort={props.changeSort} metaData={props.metaData} reviews={props.reviews}/>
      <ListOfReviews setCounter={props.setCounter} reviewCount={reviewCount} counter={props.counter} starSort={props.starSort} reviews={props.reviews} product={props.product}/>
      <ReviewButtons metaData={props.metaData} product={props.product} changeCount={changeCount.bind(this)}/>
    </div>
  )

}

export default Reviews;