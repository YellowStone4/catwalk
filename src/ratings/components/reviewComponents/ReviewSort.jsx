import React, {useState, useEffect} from 'react';

const ReviewSort = (props) => {
  console.log('ReviewSort props: ', props);
  const countReviews = (recommendings) => {
    var total = 0;
    for (var key in recommendings) {
      total += parseInt(recommendings[key])
    }
    return total;
  }
  return (
    <div>
      <h3>{countReviews(props.metaData.recommended)} reviews, sorted by </h3>
    </div>
  )
}

export default ReviewSort;