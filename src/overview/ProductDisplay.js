import React, { useState, useEffect} from 'react';
import Gallery from './components/Gallery.js';
import CartSelection from './components/CartSelection.js';
import './components/styles.css';
import clsx from 'clsx';
import {API_KEY} from '../../config.js';
import axios from 'axios';

function ProductDisplay({product, ...rest}) {
  const [productStyles, setProductStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState('');
  const [sliderOpen, setSlider] = useState(true);
  const toggleSlider = () => setSlider(!sliderOpen);

  useEffect(() => {
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${product.id}/styles`;
    let config = { headers: {'Authorization': API_KEY}, }
    let getData = async () => {
      let res = await axios.get(url, config);
      setProductStyles(res.data.results);
      setCurrentStyle(res.data.results[0]);
    }
    return getData();
  }, []);

  // Sliding Drawer State and Functionality
   let drawerClasses = clsx('side-drawer', {'close': !sliderOpen});
   let galleryClasses = clsx('galleryContainer', {'grow': !sliderOpen});

   if (currentStyle === '') return <div className='productContainer'/>

   return (
     <div className='productContainer'>
       <Gallery style={currentStyle} className={galleryClasses} toggle={toggleSlider}/>
       <CartSelection productstyles={productStyles} setCurrentStyle={setCurrentStyle} className={drawerClasses}/>
     </div>
   );
}





export default ProductDisplay;
