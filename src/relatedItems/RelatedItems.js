import React, { useEffect, useState, useRef } from 'react';
import Carousel from './components/Carousel.js';
import axios from 'axios';
import { API_KEY } from '/config.js'

const RelatedItems = (props) => {
  // console.log(props)

  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {

    //if (notInitialRender.current) {
      //let promises = [];
      let styles = [];
      const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/19091/related`;
      // const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/product_id/styles`;
      const config = {
        headers: {
          Authorization: API_KEY,
        }
        // params: {
        //   product_id: "19089",
        // }
      };
      axios.get(url, config)
        .then((res) => {
          console.log(res.data)
          let promises = res.data.map(item => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${item}/styles`, config)
          .then((res) => {
            styles.push(res.data.results[0]);
          }))
          Promise.all(promises).then(() => setRelatedProducts(styles));
          //console.log(promises);
        });
    //} else {
    //  notInitialRender.current = true
    //}

  }, []);


  return (
    <div>
      {/* {console.log(relatedProducts)} */}
      <h1>Related Items</h1>
      <Carousel products={relatedProducts}/>
    </div>
  )
}


export default RelatedItems;