import React, {useState, useEffect} from 'react';

const barStyle = {
  width: '75%',
  border: '1px solid black'
};


const StarBar = (props) => {
  //console.log('props in StarBar: props.ratings', props.ratings)
  console.log('Rating percentage in StarBar.jsx: ', props.ratings, props.number);

  const insideBar = {
    backgroundColor: 'grey',
    width: '25%',
    height: '24px',
  };


  return (
    <div style={barStyle}>
      <div style={insideBar}></div>
    </div>
  )
}

export default StarBar;