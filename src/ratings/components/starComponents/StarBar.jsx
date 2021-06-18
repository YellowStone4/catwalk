import React, {useState, useEffect} from 'react';

const barStyle = {
  width: '50%',
  left: '0px',
  border: '1px solid black',
  display: 'inline-block'
};


const StarBar = (props) => {
  //console.log('props in StarBar: props.ratings', props.ratings)

  const insideBar = {
    backgroundColor: 'grey',
    height: '18px',
    width: props.ratings + '%',
  };


  return (
    <div style={barStyle}>
      <div style={insideBar}></div>
    </div>
  )
}

export default StarBar;