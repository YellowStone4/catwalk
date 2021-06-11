import React, {useState, useEffect} from 'react';
import AvgStar from './starComponents/AvgStar.jsx';
import StarSort from './starComponents/StarSort.jsx';
import StarSliders from './starComponents/StarSliders.jsx';

const Stars = (props) => {

  useEffect(() => {
    // console.log('These are the passed down props: ', props);

  });

  return (
    <div>
      <h2>Stars</h2>

      <AvgStar />
      <StarSort metaData={props.metaData}/>
      <StarSliders />
    </div>
  )
}

export default Stars;