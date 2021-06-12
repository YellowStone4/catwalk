import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons';

const Star = (props) => {



  return (
    <FontAwesomeIcon key={Math.random()} icon={faStar} />

  )
};

export default Star;