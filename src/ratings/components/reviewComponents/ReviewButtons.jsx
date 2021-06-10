import React, {useState, useEffect} from 'react';

const ReviewButtons = (props) => {
  const addCount = () => {
    props.changeCount();

  }

  return (
    <div>
      <button onClick={addCount}>MORE REVIEWS</button>
    </div>
  )
}

export default ReviewButtons;