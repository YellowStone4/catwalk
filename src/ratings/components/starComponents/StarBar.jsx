import React, {useState, useEffect} from 'react';

const barStyle = {
  width: '50%',
  left: '0px',
  border: '1px solid rgb(251, 147, 0)',
  backgroundImage: 'linear-gradient(white, rgba(251, 147, 0, 0.4))',
  //backgroundColor: 'white',
  display: 'inline-block'
};


const StarBar = (props) => {
  //console.log('props in StarBar: props.ratings', props.ratings)

  const insideBar = {
    // backgroundColor: 'rgb(52, 63, 86)',
    backgroundImage: 'linear-gradient(white, rgba(52, 63, 86))',
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