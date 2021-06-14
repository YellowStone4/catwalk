import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons';

const Star = (props) => {



  return (
    <div style={{display: 'inline'}} key={Math.random()}>
      <FontAwesomeIcon key={props.giveKey} icon={faStar} />
    </div>

  )
};

export default Star;