import React, {useState, useEffect} from 'react';
import Star from '../reviewComponents/individualReviewComps/Star.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faStarHalf} from '@fortawesome/free-solid-svg-icons';


const AvgStar = (props) => {
  console.log('props in AvgStar :', props);

  const [avgRating, setAvgRating] = useState(0);
  const [listingArray, setListingArray] = useState([1]);

  useEffect(() => {
    if (props.metaData.ratings !== undefined) {
      var ratingCount = 0;
      var ratingTally = 0
      for (var key in props.metaData.ratings) {
        ratingCount += parseInt(props.metaData.ratings[[key]]);
        ratingTally += (parseInt(props.metaData.ratings[[key]]) * parseInt(key));
      }
      console.log('Rating count and tally: ', ratingTally, ratingCount);
      var preRound = parseInt(ratingTally) / parseInt(ratingCount);
      var afterRound = Math.round(preRound * 4) / 4;
      setAvgRating(afterRound);

      var arrayListing = [];
      for (var i = 1; i < Math.floor(afterRound); i++) {
        arrayListing.push(i);
      }
      if (afterRound % 1 !== 0) {
        console.log(afterRound % 1 !== 0);
        arrayListing.push(0);
      }
      console.log('Array listing: ', arrayListing);
      setListingArray(arrayListing);
    }
  }, [props.metaData.ratings]);

  const star = {
    display: 'inline',
    fontSize: '100px'

  }

  return (
    <div style={{position: 'relative', left:'4%', width: '20', display: 'inline', fontSize:'25px'}}>
      <h1 style={{display: 'inline', margin: '0px 20px', fontSize:'50px'}}>{avgRating}</h1>
      {listingArray.map((star) => {
        if (star > 0) {
          return <FontAwesomeIcon style={star} key={star} icon={faStar} />
        } else {
          return <FontAwesomeIcon style={star} key={star} icon={faStarHalf}/>
        }
      })}
    </div>
  )
}

export default AvgStar;