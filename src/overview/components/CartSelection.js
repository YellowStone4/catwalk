import React from 'react';
import SelectedStyle from './SelectedStyle.js';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

function CartSelection({product, productStyles, setCurrentStyle, currentStyle, ...rest}) {
  console.log('product: ', product)
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

      <div className='cartButtonContainer'>
        <button className='btn'><span>SELECT SIZE</span><FontAwesomeIcon icon={faChevronDown} /></button> <button className='btn'> <span>1</span> <FontAwesomeIcon icon={faChevronDown} /></button>
        <button className='btn'><span>ADD TO BAG</span><FontAwesomeIcon icon={faPlus} /></button> <button className={clsx('btn', 'star')}><FontAwesomeIcon icon={faStar} /></button>
      </div>
      </div>
    </div>
  )
}

export default CartSelection;