import React, {useState, useEffect} from 'react';
import SortSelection from './SortSelection.jsx';

const ReviewSort = (props) => {
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    if (props.reviews !== undefined) {
      setReviewCount(props.reviews.results.length)
    }
  }, [props.reviews.results.length])

  return (
    <div>
      <h3 style={{display: 'inline', padding:'10px', textShadow:'2px 3px 1px rgba(251, 147, 0, 0.4)', color:'rgb(52, 63, 86)'}}><span>{reviewCount} </span>reviews, sorted by <SortSelection changeSort={props.changeSort} /></h3>

    </div>
  )
}

export default ReviewSort;