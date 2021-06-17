import React, { useEffect, useState, useRef } from 'react';
import Carousel from './components/Carousel.jsx';
import CarouselOutfit from './components/CarouselOutfit.jsx';
import axios from 'axios';
import { API_KEY } from '/config.js'

const RelatedItems = ( { product, setProduct, ...rest} ) => {
  // console.log('edgars:', props.product.id)

  const [products, setProducts] = useState([]);

  useEffect(() => {
      let productsArray = [];
      let productsInfo = [];
      const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${product.id}/related`;
      // const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/19095/related`;
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
          // console.log(res.data)
          let promises = res.data.map(item => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${item}`, config)
          .then((res) => {
            // console.log(res.data);
            productsArray.push(res.data);
          }))
          Promise.all(promises).then(() => setProducts(productsArray));
        });
  }, [product]);


  return (
    <div>
      {/* {console.log(relatedProducts)} */}
      <h1>Related Items</h1>
      <Carousel product={product} setProduct={setProduct} products={products} />
      <h1>Your Outfit</h1>
      <CarouselOutfit product={product} setProduct={setProduct} products={products}/>
    </div>
  )
}


export default RelatedItems;