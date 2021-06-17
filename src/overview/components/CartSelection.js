import React from 'react';
import SelectedStyle from './SelectedStyle.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import CartButtons from './CartButtons.js';
import SocialIcons from './SocialIcons.js';
import clsx from 'clsx';
import './Sass/styles.scss';

function CartSelection({product, productStyles, setCurrentStyle, currentStyle, ...rest}) {
  let price = currentStyle.original_price;
  let salePrice = currentStyle.sale_price !== null ? '$' + currentStyle.sale_price : '';
  let priceClx = clsx({'onSale': currentStyle.sale_price !== null});

  return (
    <div {...rest}>
      <div className='cartSelectionContainer'>

        <div className='basicInfo'>
          <p className='reviews'><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/> <a href='#'>Read all reviews</a></p>
          <p>CATEGORY <FontAwesomeIcon icon = {faChevronRight}/> {product.category}</p>
          <h3>{product.name}</h3>
          <p><span style={{color:'red'}}>{salePrice}</span> <span className={priceClx}>${price}</span></p>
        </div>

        <SelectedStyle productStyles={productStyles} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle}/>
        <CartButtons currentStyle={currentStyle} />
        <SocialIcons />
      </div>
    </div>
  )
}

export default CartSelection;