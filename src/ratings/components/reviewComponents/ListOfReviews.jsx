import React, {useState, useEffect} from 'react';
import Review from './Review.jsx';

const ListOfReviews = (props) => {
  const [reviewArray, setReviewArray] = useState([]);
  const [finArray, setFinArray] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);


  useEffect(( )=> {
    if (props.starSort !== undefined) {
      var sortNeeded = false;
      for (var key in props.starSort) {
        if (props.starSort[key] === true) {
          sortNeeded = true;
        }
      }
      if (sortNeeded === true) {
        setIsFiltered(true);
        var newArr = reviewArray.filter((review) => {
          return props.starSort[review.rating] === true;
        });
        var finArr = newArr.slice(0, props.reviewCount)
        setFinArray(finArr);
      } else {
        var finArr = props.reviews.results.slice(0, props.reviewCount)
        setFinArray(finArr);
      }
    }
  }, [props.reviews.results, props.starSort, props.counter, props.reviewCount]);

  useEffect(() => {
    if (props.reviews.results !== undefined) {
      setReviewArray(props.reviews.results);
    }
  }, [props.reviews.results]);

  return (
    <div>
      {finArray.map((review) => {
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

