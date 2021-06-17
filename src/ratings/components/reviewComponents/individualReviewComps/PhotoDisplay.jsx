import React, {useState, useEffect} from 'react';

const PhotoDisplay = ({photo}) => {
  const handleImageClick = (e) => {
    console.log('Event target: ', e);

  }

  return (
    <img  src={photo.url} onClick={handleImageClick}/>
  )
}

export default PhotoDisplay;