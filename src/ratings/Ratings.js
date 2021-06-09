import React, {useState, useEffect} from 'react';
import Stars from './components/Stars.jsx';
import Reviews from './components/Reviews.jsx';
import styles from './ratingsStyles.js';
import axios from 'axios';
import key from '../../config.js';


const Ratings = ({product}) => {

  const [metaData, setMetaData] = useState({});
  const [reviewData, setReviewData] = useState({});
  const [reviewSort, setReviewSort] = useState('relevant');

  //Need to have a function that will

  //Get 5 reviews
  useEffect(() => {
    var options = {
      method: 'get',
      headers: {
        'Authorization': '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'
      },
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=19089&count=30'
    }
    axios(options).then((response) => {
      console.log('Response from request for reviews: ', response.data);
      setReviewData(response.data);
    }).catch((err) => {
      console.log('Err from requesting reviews: ', err);
    })
  }, []);

  //Get Meta Data
  useEffect(() => {
    var options = {
      method: 'get',
      headers: {
        'Authorization': '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'
      },
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=19089'
    }
    axios(options).then((response) => {
      console.log('Response from axios request for metadata: ', response.data);
      setMetaData(response.data);
    }).catch((err) => {
      console.log('Error from getting metadata: ', err);
    })
  }, []);

  return (
    <div>
      <h4>RATINGS & REVIEWS</h4>
      <div style={styles.ratingsStyle}>
        <Stars metaData={metaData} product={product}/>
        <Reviews metaData={metaData} reviews={reviewData} product={product} />
      </div>
    </div>
  )
}

export default Ratings;