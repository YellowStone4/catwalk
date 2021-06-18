import React, {useState, useEffect} from 'react';
import AvgStar from './starComponents/AvgStar.jsx';
import StarSort from './starComponents/StarSort.jsx';
import StarSliders from './starComponents/StarSliders.jsx';

const Stars = (props) => {

  useEffect(() => {

  });

  return (
    <div style={{backgroundColor: 'rgb(245, 230, 202)'}}>
      <AvgStar metaData={props.metaData}/>
      <StarSort starSort={props.starSort} changeStarSort={props.changeStarSort} metaData={props.metaData}/>
      <StarSliders metaData={props.metaData}/>
    </div>
  )
}

export default Stars;