import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ReviewDate = (props) => {
  const [postedDate, setPostedDate] = useState('');

  const getFormattedDate = (date) => {
    return new Date(date);
  };

  useEffect(() => {
    setPostedDate(getFormattedDate(props.date).toString());
  }, [props.date]);


  return (
    <div>
      {postedDate}
    </div>
  )
}

export default ReviewDate;