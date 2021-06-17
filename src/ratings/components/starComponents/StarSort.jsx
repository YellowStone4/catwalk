import React, {useState, useEffect} from 'react';
import StarBar from './StarBar.jsx';
import styles from '../reviewComponents/review.css';



const StarSort = (props) => {

  const [starPercentage, setStarPercentage] = useState(0);
  const [ratingObj, setRatingObj] = useState({1: "0", 2: "0", 3: "0", 4: "0", 5: "0"});
  const [percentFive, setPercentFive] = useState(0);
  const [percentFour, setPercentFour] = useState(0);
  const [percentThree, setPercentThree] = useState(0);
  const [percentTwo, setPercentTwo] = useState(0);
  const [percentOne, setPercentOne] = useState(0);
  const [sortedStars, setSortedStars] = useState([1, 2]);
  const [sortExists, setSortExists] = useState(false);
  const [recommendedPercentage, setRecommendedPercentage] = useState(0);

  useEffect(() => {
    var currentSort = [];
    for (var key in props.starSort) {
      if (props.starSort[key] === true) {
        currentSort.push(key);
      }
    }
    if (currentSort.length) {
      setSortExists(true);
    }
    setSortedStars(currentSort);

  }, [props])

  useEffect(() => {
    if (props.metaData.recommended !== undefined) {
      var recObj = props.metaData.recommended;
      var recTrueCount = parseInt(recObj.true);
      var recFalseCount = parseInt(recObj.false);
      var both = recTrueCount + recFalseCount;
      var percentage = Math.floor((recTrueCount / both) * 100);
      setRecommendedPercentage(percentage);
    }

  }, [props.metaData.recommended]);


  const setPercent = (ratingsList) => {
    var totalRatings = parseInt(ratingsList['1']) + parseInt(ratingsList['2']) + parseInt(ratingsList['3']) + parseInt(ratingsList['4']) + parseInt(ratingsList['5']);

    setPercentOne((ratingsList['1'] / totalRatings) * 100);
    setPercentTwo((ratingsList['2'] / totalRatings) * 100);
    setPercentThree((ratingsList['3'] / totalRatings) * 100);
    setPercentFour((ratingsList['4'] / totalRatings) * 100);
    setPercentFive((ratingsList['5'] / totalRatings) * 100);
  }

  useEffect(() => {
    setPercent(ratingObj);
  }, [ratingObj]);

  useEffect(() => {
    if (props.metaData.ratings !== undefined) {
      setRatingObj(props.metaData.ratings);
    }
  }, [props.metaData.ratings]);

  const starSortClick = (event) => {
    console.log(event.target.value);
    props.changeStarSort(event.target.value);
  }

  const liStyle = {
    display: "inline"
  }

  return (
    <div>
      <p> {recommendedPercentage}% of reviews recommend this product</p>
      {sortExists === true && sortedStars.map((star) => {
        return <span key={star}>{star}</span>
      })}
      <ul>
        <li style={liStyle}><button className="button" onClick={starSortClick} value={5}>5 Stars:</button> <StarBar number={5} ratings={percentFive} /> </li>
        <br />
        <li style={liStyle}><button className="button" onClick={starSortClick} value={4}>4 Stars:</button> <StarBar number={4} ratings={percentFour}/></li>
        <br />
        <li style={liStyle}><button className="button" onClick={starSortClick} value={3}>3 Stars:</button> <StarBar number={3} ratings={percentThree}/></li>
        <br />
        <li style={liStyle}><button className="button" onClick={starSortClick} value={2}>2 Stars:</button> <StarBar number={2} ratings={percentTwo}/></li>
        <br />
        <li style={liStyle}><button className="button" onClick={starSortClick} value={1}>1 Stars:</button> <StarBar number={1} ratings={percentOne}/></li>
      </ul>
    </div>
  )
}

export default StarSort;
/*
{sortExists === true && sortedStars.map((star) => {
  return <p>{star}dog</p>
})} */