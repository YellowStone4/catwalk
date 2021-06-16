import React from 'react';
import './Sass/styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

function CartButtons() {
    return (
      <div className='cartButtonContainer'>
        <button className='btn'><span>SELECT SIZE</span><FontAwesomeIcon icon={faChevronDown} /></button> <button className='btn'> <span>1</span> <FontAwesomeIcon icon={faChevronDown} /></button>
        <button className='btn'><span>ADD TO BAG</span><FontAwesomeIcon icon={faPlus} /></button> <button className={clsx('btn', 'star')}><FontAwesomeIcon icon={faStar} /></button>
      </div>
    )
}

export default CartButtons;
