const {API_KEY} = require('../../config.js');
import React, {useState, useEffect} from 'react';
import Stars from './components/Stars.jsx';
import Reviews from './components/Reviews.jsx';
import styles from './ratingsStyles.js';
import axios from 'axios';



const Ratings = ({product}) => {
  const [metaData, setMetaData] = useState({});
  const [reviewSort, setReviewSort] = useState('');
  const [reviewCount, setCountReview] = useState(2);
  const [productId , setProductId] = useState(19089);

  //State to manage star sorting
  const [reviewData, setReviewData] = useState({results: []});
  const [postSortData, setPostSortData] = useState([]);
  const [counter, setCounter] = useState(1);
  const [starSort, setStarSort] = useState({
    '1': false,
    '2': false,
    '3': false,
    '4': false,
    '5': false
  });

  const changeStarSort = (starCount) => {
    setCounter(counter+1);
    if (starSort[starCount] === true) {
      var newSort = starSort;
      newSort[starCount] = false;
      setStarSort(newSort);
      console.log(starSort);
    } else {
      var newSort = starSort;
      newSort[starCount] = true;
      setStarSort(newSort);
      console.log(starSort);
    }
  }

  useEffect(() => {
    if (reviewData.results.length === 0) {
      var sortedReviews = reviewData.results;
    }
    var sortNeeded = false;
    for (var key in starSort) {
      if (starSort[key] === true) {
        sortNeeded = true;
      }
    }
    if (sortNeeded) {
      var sortedReviews = reviewData.results.filter((review) => {
        return starSort[review.rating] === true;
      });
    } else {
      var sortedReviews = reviewData.results;
    }
    var dataCopy = reviewData;
    dataCopy.results = sortedReviews.slice(counter);
    setPostSortData(dataCopy);
    //console.log('Post sort data: ', postSortData);
  }, [reviewData, starSort, counter])

  const changeSort = (sortMethod) => {
    setReviewSort(sortMethod);
  }

  const changeCount = () => {
    setCountReview(reviewCount + 2);
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
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=' + productId + '&count=' + 3000  + '&sort=' + reviewSort
    }
    axios(options).then((response) => {
      setReviewData(response.data);
    }).catch((err) => {
      // console.log('Err from requesting reviews: ', err);
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
      // console.log('Error from getting metadata: ', err);
    })
  }, [productId]);

  return (
    <div>
      <h4>RATINGS & REVIEWS</h4>
      <div style={styles.ratingsStyle}>
        <Stars changeStarSort={changeStarSort.bind(this)} metaData={metaData} product={product}/>
        <Reviews setStarSort={setStarSort} starSort={starSort} changeCount={changeCount.bind(this)} changeSort={changeSort.bind(this)} metaData={metaData} reviews={reviewData} product={product} />
      </div>
    </div>
  )
}

export default Ratings;