import React from 'react';
import styles from './overviewStyles.js';
import ProductDetails from './components/ProductDetails';
import Gallery from './components/Gallery';
import Selection from './components/Selection';


function Overview() {
  return (
    <section style={styles.sectionElement}>
      <div style={styles.productContainer} id="productContainer">
        <Gallery />
        <Selection />

      </div>
      <ProductDetails />

    </section>
  )
}


export default Overview;