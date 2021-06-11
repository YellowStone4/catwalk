import React from 'react';
import Card from './Card.js';
import '../styles.css';

const Carousel = (props) => {
  return (
    <div className="carousel">
      {/* {console.log(props.products)} */}
      <button className="carousel_button carousel_button--left" >
        <img src="/images/left.png" atl=""/>
      </button>

      <ul className="carousel_track">
        <li className="card_slide"> <Card products={props.products}/></li>
        {/* <li className="card_slide"> <Card /></li>
        <li className="card_slide"> <Card /></li>
        <li className="card_slide"> <Card /></li> */}
        {/* <li className="carousel_slide"><img className="testImage" src="/images/dog.jpeg" alt=""/></li>
        <li className="carousel_slide"><img className="testImage" src="/images/cat.jpeg" alt=""/></li>
        <li className="carousel_slide"><img className="testImage" src="/images/bird.jpeg" alt=""/></li> */}
      </ul>

      {/* <Card/> */}
      <button className="carousel_button carousel_button--right" >
        <img src="/images/right.png" atl=""/>
      </button>
    </div>
  )
}

export default Carousel;