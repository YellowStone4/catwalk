import React from 'react';
import SelectedStyle from './SelectedStyle.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import CartButtons from './CartButtons.js';
import SocialIcons from './SocialIcons.js';

function CartSelection({product, productStyles, setCurrentStyle, currentStyle, ...rest}) {
  return (
    <div {...rest}>
      <div className='cartSelectionContainer'>

      <div className='basicInfo'>
        <p className='reviews'><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/> <a href='#'>Read all reviews</a></p>
        <p>CATEGORY <FontAwesomeIcon icon = {faChevronRight}/> {product.category}</p>
        <h3>{product.name}</h3>
        <p>${currentStyle.original_price}</p>
      </div>

      <SelectedStyle productStyles={productStyles} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle}/>
      <CartButtons />
      <SocialIcons />
      </div>
    </div>
  )
}

export default CartSelection;