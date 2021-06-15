import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons';

const Star = (props) => {



  return (
    <div style={{display: 'inline'}} >
      <FontAwesomeIcon  icon={faStar} />
    </div>

  )
};

export default Star;

//key={Math.random()

//key={props.giveKey}