import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand } from '@fortawesome/free-solid-svg-icons'

const containerStyle = {
  backgroundColor: '#d1d9d9',
};

function Gallery() {
  return (
    <div style={containerStyle}>
      <FontAwesomeIcon icon={faExpand} />
    </div>
  )
}

export default Gallery;
