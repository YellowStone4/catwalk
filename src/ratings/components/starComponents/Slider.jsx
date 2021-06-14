import React, {useState, useEffect} from 'react';

const sliderStyle = {
  width: '50%',
  border: '1px solid grey',
  margin: '0 auto'
};





const Slider = (props) => {

  const calculatePercentage = (outOfFive) => {
    return outOfFive * 20;
  };

  const arrow = {
    border: 'solid black',
    borderWidth: '0 3px 3px 0',
    display: 'inline-block',
    padding: '3px',
    transform: 'rotateZ(45deg)',
    position: 'relative',
    bottom: '8px',
    left: (props.val * 20) + '%'
  }

  const insideBar = {
    backgroundColor: 'white',
    height: '10px',
    width: '100%'
  };


  return (
    <div style={sliderStyle}>

      <div style={insideBar}>
        <div style={arrow}></div>
      </div>
    </div>
  )
}

export default Slider;