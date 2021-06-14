import React, {useState, useEffect} from 'react';
import AvgStar from './starComponents/AvgStar.jsx';
import StarSort from './starComponents/StarSort.jsx';
import StarSliders from './starComponents/StarSliders.jsx';

const Stars = (props) => {

  useEffect(() => {



  });

  return (
    <div>
      <h2>Stars</h2>

      <AvgStar />
      <StarSort  changeStarSort={props.changeStarSort} metaData={props.metaData}/>
      <StarSliders metaData={props.metaData}/>
    </div>
  )
}

export default Stars;