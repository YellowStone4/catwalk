import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons';
import Star from './Star.jsx';



const StarCount = (props) => {
  const [listArray, setListArray] = useState(['fill']);

  useEffect(() => {
    var arrayCounter = []
    for (var i = 0; i < props.starNumber; i++) {
      arrayCounter.push('fill');
    }
    setListArray(arrayCounter);
  }, [props.starNumber]);

  // const returnStar = (count) => {
  //   var arrayCounter = []
  //   for (var i = 0; i < count; i++) {
  //     arrayCounter.push('fill');
  //   }
  // }
  const starStyle = {
    display: 'inliine'
  }

  return (
    <div style={starStyle} key={Math.random()}>
      {listArray.map(ele => {
      return (
        <Star style={starStyle} key={Math.random()} giveKey={Math.random()}/>
      )
      })}


    </div>
  )
}

export default StarCount;

//<Star key={Math.random()} giveKey={Math.random()}/>

// {arrayCounter.map(ele => {
//   return ()
// })}