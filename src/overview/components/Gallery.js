import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faArrowDown, faArrowUp, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './gallery.css';
import p1 from './images/p1.jpg';
import p2 from './images/p2.jpg';
import p3 from './images/p3.jpg';
import p4 from './images/p4.jpg';
import p5 from './images/p5.jpg';

let styles = [p1, p2, p3, p4, p5];

function Gallery(props) {
  return (
    <div className='container'>

      <div className='thumbnailContainer'>
      <FontAwesomeIcon className='arrow' icon={faArrowUp} />
        {/* {styles.forEach(style => {
          {console.log('style: ', style)}
          <img className='img' src={`${style}`} />
        })} */}
        <img className='img' src={p1} />
        <img className='img' src={p2} />
        <img className='img' src={p3} />
        <img className='img img-active' src={p4} />
        <img className='img' src={p5} />
        <FontAwesomeIcon className='arrow' icon={faArrowDown} />
      </div>

      <FontAwesomeIcon onClick={props.toggle} className='icon' icon={faExpand} />
    </div>
  )
}

export default Gallery;
