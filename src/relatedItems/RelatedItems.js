import React, { useEffect, useState } from 'react';
import Carousel from './components/Carousel.js';
import axios from 'axios';
import { API_KEY } from '/config.js'

const RelatedItems = (props) => {

  //const [products, getProducts] = useState('');

  // useEffect(() => {
  //   getAllProducts();
  // }, []);

  //const getAllProducts = () => {
    // axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products', {
    //   headers: {
    //     'Authorization': `${API_KEY}`
    //   },
    //   params: {
    //     count: 1
    //   }
    // })
    // .then(function (response) {

    //   const allProducts = response;
    //   console.log(allProducts);
    // })
  //}


  return (
    <div>
      {console.log(props.product)}
      <h1>Related Items</h1>
      <Carousel products={props.product}/>
    </div>
  )
}

// function RelatedItems() {
//   return <h2>RelatedItems: Edgar</h2>
// }

export default RelatedItems;