import React, { useState } from 'react';
import Gallery from './components/Gallery.js';
import CartSelection from './components/CartSelection.js';
import './components/styles.css';
import clsx from 'clsx';

function ProductDisplay() {
   const [sliderOpen, setSlider] = useState(true);
   const toggleSlider = () => setSlider(!sliderOpen);

   let drawerClasses = clsx('side-drawer', {'close': !sliderOpen});
   let galleryClasses = clsx('galleryContainer', {'grow': !sliderOpen})

   return (
     <div className='productContainer'>
       <Gallery className={galleryClasses} toggle={toggleSlider}/>
       <CartSelection className={drawerClasses}/>
     </div>
   )
}

export default ProductDisplay;
