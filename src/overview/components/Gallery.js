import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand } from '@fortawesome/free-solid-svg-icons'

const containerStyle = {
  backgroundColor: '#d1d9d9',
  position:'relative',
};

const iconStyle = {
  fontSize:'30px',
  margin: '10px',
  position:'absolute',
  right: '10',
  cursor: 'pointer'
}


function Gallery(props) {
  return (
    <div style={containerStyle}>
      <FontAwesomeIcon onClick={props.toggle} style={iconStyle} icon={faExpand} />
    </div>
  )
}

export default Gallery;
