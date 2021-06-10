import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons';


const StarCount = (props) => {

  return (
    <div>
      {Array(props.starNumber).fill(<FontAwesomeIcon icon={faStar} />)}

    </div>
  )
}

export default StarCount;