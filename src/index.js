/* eslint-disable no-console */
import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import axios from 'axios'
import { API_KEY } from '../config.js'
import ProductPage from './ProductPage.jsx';

const Index = () => {
  const [product, setProduct] = useState({})

  useEffect(()=> {
    product.id = '19089'
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${product.id}`
    const config = {
      headers: {
        Authorization: API_KEY,
      },
    };
    axios.get(url, config)
    .then(res => setProduct(res.data))
  }, [])

  if (product.id === undefined) {
    return <div style={{backgroundColor: 'blue'}}>This is our very creative 404 page</div>
  }

  return <ProductPage product={product} setProduct={setProduct}/>
}

render(<Index />, document.getElementById('react-root'));
