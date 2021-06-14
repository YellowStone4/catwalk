import React, {useState, useEffect} from 'react';

const barStyle = {
  width: '75%',
  border: '1px solid black'
};


const StarBar = (props) => {
  //console.log('props in StarBar: props.ratings', props.ratings)

  const insideBar = {
    backgroundColor: 'grey',
    height: '24px',
    width: props.ratings + '%'
  };


  return (
    <div style={barStyle}>
      <div style={insideBar}></div>
    </div>
  )
}

export default StarBar;