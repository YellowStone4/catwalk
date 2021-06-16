import React, {useState, useEffect} from 'react';
import Review from './Review.jsx';

const ListOfReviews = (props) => {
  const [reviewArray, setReviewArray] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(( )=> {
    console.log('Props in List of Reviews: ', props);
    if (props.starSort !== undefined) {
      var sortNeeded = false;
      console.log('here');
      for (var key in props.starSort) {
        if (props.starSort[key] === true) {
          sortNeeded = true;
        }
      }
      if (sortNeeded === true) {
        setIsFiltered(true);
        console.log('Sort needed: ', sortNeeded);
        console.log('reviewArray: ', reviewArray);
        var newArr = reviewArray.filter((review) => {
          console.log('starsort check: ', props.starSort);
          console.log('review rating check: ', review.rating);

          return props.starSort[review.rating] === true;
        });
        setReviewArray(newArr);
      } else {
        setReviewArray(props.reviews.results);
      }

    }
  }, [props.starSort, props.counter]);

  // useEffect(() => {
  //   if (reviewData.results.length === 0) {
  //     var sortedReviews = reviewData.results;
  //   }
  //   var sortNeeded = false;
  //
  //   if (sortNeeded) {
  //     var sortedReviews = reviewData.results.filter((review) => {
  //       return starSort[review.rating] === true;
  //     });
  //   } else {
  //     var sortedReviews = reviewData.results;
  //   }
  //   var dataCopy = reviewData;
  //   dataCopy.results = sortedReviews.slice(counter);
  //   setPostSortData(dataCopy);
  //   console.log('Post sort data: ', postSortData);
  // }, [reviewData, starSort, counter])

  useEffect(() => {
    if (props.reviews.results !== undefined) {
      setReviewArray(props.reviews.results);
    }
  }, [props.reviews.results]);

  return (
    <div>
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

