import React from 'react';
import Card from './Card.js';
import '../styles.css';

const Carousel = () => {
  return (
    <div className="carousel">
      <button className="carousel_button carousel_button--left" >
        <img src="/images/left.png" atl=""/>
      </button>

      <ul className="carousel_track">
        <li className="carousel_slide"><img className="testImage" src="/images/dog.jpeg" alt=""/></li>
        <li className="carousel_slide"><img className="testImage" src="/images/cat.jpeg" alt=""/></li>
        <li className="carousel_slide"><img className="testImage" src="/images/bird.jpeg" alt=""/></li>
      </ul>

      {/* <Card/> */}
      <button className="carousel_button carousel_button--right" >
        <img src="/images/right.png" atl=""/>
      </button>
    </div>
  )
}

export default Carousel;