import React, { useState } from 'react';
import './overview.css';

import ProductDetails from './components/ProductDetails.js';
import Gallery from './components/Gallery.js';
import Selection from './components/Selection.js';

class Overview extends React.Component {
 state = {sliderOpen: true, styles: [1, 2, 3, 4, 5] }

 sliderToggleClickHandler = () => {
   this.setState({
     sliderOpen: !this.state.sliderOpen
   });
 }

 render() {
  let drawerClasses = 'side-drawer';
  let galleryContainerClasses = 'galleryContainer'

  if (this.state.sliderOpen === false) {
    drawerClasses = 'close';
    galleryContainerClasses = 'galleryContainer grow';
  }

   return (
     <section className='overviewContainer'>
       <div className='productContainer'>
         <div className={galleryContainerClasses}>
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
