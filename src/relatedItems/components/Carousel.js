import React from 'react';
import Card from './Card.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import '../styles.css';

const Carousel = (props) => {
  return (
    <div className="carousel">
      {/* {console.log(props.products)} */}
      <button className="carousel_button carousel_button--left" >
      <FontAwesomeIcon icon={ faAngleLeft } size = '4x'/>
        {/* <img src="/images/left.png" atl=""/> */}
      </button>

      <ul className="carousel_track">
        {props.products.map((item) => {
          // console.log(item.style_id);
          return <li key={item.style_id} className="card_slide"> <Card product={item}/></li>
        })}
      </ul>

      <button className="carousel_button carousel_button--right" >
        <FontAwesomeIcon icon={ faAngleRight } size = '4x'/>
        {/* <img src="/images/right.png" atl=""/> */}
      </button>
    </div>
  )
}

export default Carousel;