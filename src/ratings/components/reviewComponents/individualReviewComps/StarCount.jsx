import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons';
import Star from './Star.jsx';



const StarCount = (props) => {
  const [listArray, setListArray] = useState([]);

  useEffect(() => {
    var arrayCounter = []
    for (var i = 0; i < props.starNumber; i++) {
      arrayCounter.push(i);
    }
    setListArray(arrayCounter);


  }, [props.starNumber]);

  const starStyle = {
    display: 'inliine'
  }

  return (
    <div style={starStyle}>
      {listArray.map(ele => {
      return (
        <Star style={starStyle} key={ele}/>
      )
      })}


    </div>
  )
}

export default StarCount;
