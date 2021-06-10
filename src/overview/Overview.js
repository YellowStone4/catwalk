import React, { useState } from 'react';
import ProductDisplay from './ProductDisplay.js';
import ProductDescription from './ProductDescription.js';

const style = {
    height: '80vh',
    border: '1px solid black',
    display: 'grid',
    gridTemplateRows: 'minmax(200px, 80%) 1fr',
    height: '100%',
}

function Overview({product, ...rest}) {
   return (
     <section style={style}>
       <ProductDisplay product={product} />
       <ProductDescription product={product}/>
    </section>
  );
}

export default Overview;
