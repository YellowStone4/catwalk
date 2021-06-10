import React, { useState, useEffect} from 'react';
import Gallery from './components/Gallery.js';
import CartSelection from './components/CartSelection.js';
import './components/styles.css';
import clsx from 'clsx';
import API_KEY from '../../config.js';
import axios from 'axios';

function ProductDisplay({product, ...rest}) {

   const [sliderOpen, setSlider] = useState(true);
   const toggleSlider = () => setSlider(!sliderOpen);

   let drawerClasses = clsx('side-drawer', {'close': !sliderOpen});
   let galleryClasses = clsx('galleryContainer', {'grow': !sliderOpen});

   const url = `https://app-hrsei-api.herokuapp.com/api/fec2/:hr-rfe/products/19089/styles`;

   let config = {
      headers: {
        'Authorization': API_KEY
      }
    }


      axios.get(url, config).then(res => {
        console.log('res: ', res.data);
      })



   return (
     <div className='productContainer'>
       <Gallery className={galleryClasses} toggle={toggleSlider}/>
       <CartSelection className={drawerClasses}/>
     </div>
   )
}

//  function getStyleData(productId) {
//   console.log('Api: ', API_KEY)
//   let url = `https://app-hrsei-api.herokuapp.com/api/fec2/:hr-rfe`;
//   const config = {
//     headers: {
//       Authorization: API_KEY,
//     },
//   };
//   axios.get(url, config).then(res => {
//     console.log('res: ', res);
//     res.send(200)
//   }).catch(err => {
//     console.log('err: ', err);
//   })

// }



export default ProductDisplay;
