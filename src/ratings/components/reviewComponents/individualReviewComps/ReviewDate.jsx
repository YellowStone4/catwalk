import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ReviewDate = (props) => {
  const [postedDate, setPostedDate] = useState('');

  const getFormattedDate = (date) => {
    return new Date(date);
  };

  useEffect(() => {
    var preDate = getFormattedDate(props.date).toString();
    var dateArr = preDate.split(' ');
    var finDate = dateArr[1] + ' ' + dateArr[2] + ', ' + dateArr[3];

    setPostedDate(finDate);
  }, [props.date]);


  return (
    <div style={{display: 'inline'}}>
      {postedDate}
    </div>
  )
}

export default ReviewDate;