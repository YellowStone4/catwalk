import React, {useState, useEffect} from 'react';
import StarBar from './StarBar.jsx';



const StarSort = (props) => {
  console.log('Metadata ratings in StarSort: ', props.metaData.ratings);
  const [starPercentage, setStarPercentage] = useState(0);
  const [ratingObj, setRatingObj] = useState({1: "0", 2: "0", 3: "0", 4: "0", 5: "0"});
  const [percentFive, setPercentFive] = useState(0);
  const [percentFour, setPercentFour] = useState(0);
  const [percentThree, setPercentThree] = useState(0);
  const [percentTwo, setPercentTwo] = useState(0);
  const [percentOne, setPercentOne] = useState(0);

  const setPercent = (ratingsList) => {
    console.log('ratingsList in setPercent: ', ratingsList);
    var totalRatings = parseInt(ratingsList['1']) + parseInt(ratingsList['2']) + parseInt(ratingsList['3']) + parseInt(ratingsList['4']) + parseInt(ratingsList['5']);
    // for (var key in ratingsList) {
    //   totalRatings = totalRatings + ratingsList[key];
    // };
    console.log('1: ', ratingsList['1']);
    console.log('2: ', ratingsList['2']);
    console.log('3: ', ratingsList['3']);
    console.log('4: ', ratingsList['4']);
    console.log('5: ', ratingsList['5']);

    console.log('Total ratings: ', totalRatings);
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

  const calculatePercentage = (percentages) => {

  }

  return (
    <div>
      <h3>Star List Here:</h3>
      <ul>
        <li>5 Stars: <StarBar number={5} ratings={percentFive} /> </li>
        <li>4 Stars: <StarBar number={4} ratings={percentFour}/></li>
        <li>3 Stars: <StarBar number={3} ratings={percentThree}/></li>
        <li>2 Stars: <StarBar number={2} ratings={percentTwo}/></li>
        <li>1 Stars: <StarBar number={1} ratings={percentOne}/></li>
      </ul>
    </div>
  )
}

export default StarSort;