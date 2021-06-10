import React, {useState, useEffect} from 'react';
import Review from './Review.jsx';

const ListOfReviews = (props) => {
  const [reviewArray, setReviewArray] = useState([]);


  useEffect(() => {
    if (props.reviews.results !== undefined) {
      setReviewArray(props.reviews.results);
    }
  }, [props.reviews.results]);

  return (
    <div>
      <h5>List of reviews here: </h5>
      {reviewArray.map((review) => {
        return <Review key={review.review_id} review={review}/>;
      })}

    </div>
  )
}

export default ListOfReviews;

/*
{props.reviews.results.map((review) => {
        return <Review review={review}/>;
      })} */

