const {API_KEY} = require('../../config.js');
import React, {useState, useEffect} from 'react';
import Stars from './components/Stars.jsx';
import Reviews from './components/Reviews.jsx';
import styles from './ratingsStyles.js';
import axios from 'axios';



const Ratings = ({product}) => {
  const [metaData, setMetaData] = useState({});
  const [reviewSort, setReviewSort] = useState('');
  const [productId , setProductId] = useState(19089);
  const [helpfulCount, setHelpfulCount] = useState(0);

  //State to manage star sorting
  const [reviewData, setReviewData] = useState({results: []});
  const [postSortData, setPostSortData] = useState([]);
  const [counter, setCounter] = useState(1);
  const [starSort, setStarSort] = useState({'1': false, '2': false, '3': false, '4': false, '5': false});

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

  const changeSort = (sortMethod) => {
    setReviewSort(sortMethod);
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
  }, [reviewSort, productId, counter]);

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
      <h2 style={{margin: '10px 20px'}}>RATINGS & REVIEWS</h2>
      <div style={styles.ratingsStyle}>
        <Stars starSort={starSort} changeStarSort={changeStarSort.bind(this)} metaData={metaData} product={product}/>
        <Reviews style={{backgroundColor: 'orange'}} setCounter={setCounter.bind(this)} counter={counter} setStarSort={setStarSort} starSort={starSort}  changeSort={changeSort.bind(this)} metaData={metaData} reviews={reviewData} product={product} />
      </div>
    </div>
  )
}

export default Ratings;