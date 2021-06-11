import React from 'react';
import SelectedStyle from './SelectedStyle.js';
import './styles.css';

function CartSelection({setCurrentStyle, ...rest}) {

  return (
    <div {...rest}>
      <div className='basicInfo'>
        <p>***** <a href='#'>Read all reviews</a></p>
        <p>CATEGORY</p>
        <h3>EXPANDED PRODUCT NAME</h3>
        <p>$369</p>
      </div>

      <SelectedStyle productStyles={rest.productstyles} setCurrentStyle={setCurrentStyle}/>

      <div className='cartContainer'>
        <button className='btn'> SELECT SIZE V </button> <button className='btn'> 1 v </button>
        <button className='btn'> ADD TO BAG +</button> <button className='btn'>*</button>

      </div>
    </div>
  )
}

export default CartSelection;