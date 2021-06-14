/* eslint-disable no-console */
import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import axios from 'axios'
import { API_KEY } from '../config.js'
import ProductPage from './ProductPage.jsx';

const Index = () => {
  const [product, setProduct] = useState()

  useEffect(()=> {
    const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/19092'
    const config = {
      headers: {
        Authorization: API_KEY,
      },
    };
    axios.get(url, config)
    .then(res => setProduct(res.data))
  }, [])

  return <ProductPage product={product}/>
}

render(<Index />, document.getElementById('react-root'));
