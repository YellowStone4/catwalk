import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons';
import Star from './Star.jsx';



const StarCount = (props) => {

  return (
    <div>
      {Array(props.starNumber).fill(<Star />)}
    </div>
  )
}

export default StarCount;