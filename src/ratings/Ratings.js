const {API_KEY} = require('../../config.js');
import React, {useState, useEffect} from 'react';
import Stars from './components/Stars.jsx';
import Reviews from './components/Reviews.jsx';
import styles from './ratingsStyles.js';
import axios from 'axios';



const Ratings = ({product}) => {
  const [metaData, setMetaData] = useState({});
  const [reviewData, setReviewData] = useState({});
  const [reviewSort, setReviewSort] = useState('');
  const [reviewCount, setCountReview] = useState(2);
  const [productId , setProductId] = useState(19089);

  const changeSort = (sortMethod) => {
    setReviewSort(sortMethod);
  }

  const changeCount = () => {
    setCountReview(reviewCount + 2);
    console.log('Review count: ', reviewCount);
  }

  useEffect(() => {
    setProductId(product.id)

  }, [product.id])

  useEffect(() => {
    var options = {
      method: 'get',
      headers: {
        'Authorization': API_KEY
      },
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=' + productId + '&count=' + reviewCount  + '&sort=' + reviewSort
    }
    axios(options).then((response) => {
      console.log('Response from request for reviews: ', response.data);
      console.log('Review count inside axios: ', options.url);
      setReviewData(response.data);
    }).catch((err) => {
      console.log('Err from requesting reviews: ', err);
    })
  }, [reviewSort, reviewCount, productId]);

  //Get Meta Data
  useEffect(() => {
    var options = {
      method: 'get',
      headers: {
        'Authorization': API_KEY
      },
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=' + productId
    }
    axios(options).then((response) => {
      setMetaData(response.data);
    }).catch((err) => {
      console.log('Error from getting metadata: ', err);
    })
  }, [productId]);

  return (
    <div>
      <h4>RATINGS & REVIEWS</h4>
      <div style={styles.ratingsStyle}>
        <Stars metaData={metaData} product={product}/>
        <Reviews changeCount={changeCount.bind(this)} changeSort={changeSort.bind(this)} metaData={metaData} reviews={reviewData} product={product} />
      </div>
    </div>
  )
}

export default Ratings;