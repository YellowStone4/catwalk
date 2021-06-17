import React, {useState, useEffect} from 'react';
import StarBar from './StarBar.jsx';



const StarSort = (props) => {

  const [starPercentage, setStarPercentage] = useState(0);
  const [ratingObj, setRatingObj] = useState({1: "0", 2: "0", 3: "0", 4: "0", 5: "0"});
  const [percentFive, setPercentFive] = useState(0);
  const [percentFour, setPercentFour] = useState(0);
  const [percentThree, setPercentThree] = useState(0);
  const [percentTwo, setPercentTwo] = useState(0);
  const [percentOne, setPercentOne] = useState(0);

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
    props.changeStarSort(event.target.value);

    // console.log('STAR DOUBLE CLICK: ', setStarDoubleClick);
  }

  const liStyle = {
    display: "inline"
  }

  return (
    <div>
      <ul>
        <li style={liStyle}><span onClick={starSortClick} value={5}>5 Stars:</span> <StarBar number={5} ratings={percentFive} /> </li>
        <br />
        <li style={liStyle}><span onClick={starSortClick} value={4}>4 Stars:</span> <StarBar number={4} ratings={percentFour}/></li>
        <br />
        <li style={liStyle}><span onClick={starSortClick} value={3}>3 Stars:</span> <StarBar number={3} ratings={percentThree}/></li>
        <br />
        <li style={liStyle}><span onClick={starSortClick} value={2}>2 Stars:</span> <StarBar number={2} ratings={percentTwo}/></li>
        <br />
        <li style={liStyle}><span onClick={starSortClick} value={1}>1 Stars:</span> <StarBar number={1} ratings={percentOne}/></li>
      </ul>
    </div>
  )
}

export default StarSort;