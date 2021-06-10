import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faArrowDown, faArrowUp, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import p1 from './images/p1.jpg';
import p2 from './images/p2.jpg';
import p3 from './images/p3.jpg';
import p4 from './images/p4.jpg';
import p5 from './images/p5.jpg';

function Gallery({className, toggle, ...rest}) {
  return (
    <div className={`container ${className}`}>

      <div className='thumbnailContainer'>
      <FontAwesomeIcon className='arrow' icon={faArrowUp} />
        <img className='img' src={p1} />
        <img className='img' src={p2} />
        <img className='img' src={p3} />
        <img className='img img-active' src={p4} />
        <img className='img' src={p5} />
        <FontAwesomeIcon className='arrow' icon={faArrowDown} />
      </div>

      <FontAwesomeIcon onClick={toggle} className='icon' icon={faExpand} />
    </div>
  )
}

export default Gallery;
