import React, { useState } from 'react';
import './overview.css';

import ProductDetails from './components/ProductDetails.js';
import Gallery from './components/Gallery.js';
import Selection from './components/Selection.js';

class Overview extends React.Component {
 state = {sliderOpen: true }

 sliderToggleClickHandler = () => {
   this.setState({
     sliderOpen: !this.state.sliderOpen
   });
 }

 render() {
  let drawerClasses = 'side-drawer';
  let productContainerClasses = 'productContainer'

  if (!this.state.sliderOpen) {
    drawerClasses = 'slide-drawer open';
    productContainerClasses = 'productContainer grow';
  } else {
    drawerClasses = 'slide-drawer';
    productContainerClasses = 'productContainer';
  }

   return (
     <section className='overviewContainer'>
       <div className={productContainerClasses}>
         <div className='galleryContainer'>
         <Gallery toggle={this.sliderToggleClickHandler}/>
         </div>
         <div className = {drawerClasses}>
         <Selection show={this.state.sliderOpen} />
         </div>
       </div>

       <ProductDetails />
    </section>
  );
 }
}

export default Overview;
