import React, {useState, useEffect} from 'react';
import StarBar from './StarBar.jsx';



const StarSort = (props) => {
  // console.log('Metadata ratings in StarSort: ', props.metaData.ratings);
  const [starPercentage, setStarPercentage] = useState(0);

  const calculatePercentage = (percentages) => {

  }

  return (
    <div>
      <h3>Star List Here:</h3>
      <ul>
        <li>5 Stars: <StarBar number={5} ratings={props.metaData.ratings} /> </li>
        <li>4 Stars: <StarBar number={4} ratings={props.metaData.ratings}/></li>
        <li>3 Stars: <StarBar number={3} ratings={props.metaData.ratings}/></li>
        <li>2 Stars: <StarBar number={2} ratings={props.metaData.ratings}/></li>
        <li>1 Stars: <StarBar number={1} ratings={props.metaData.ratings}/></li>
      </ul>
    </div>
  )
}

export default StarSort;