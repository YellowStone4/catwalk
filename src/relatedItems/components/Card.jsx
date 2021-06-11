import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles.css';


const cardGrid = {
  //background: 'lightBlue',
  padding: '3px',
}

const Card = (props) => {

  return (
    // <div className='container_slider'>
      <div className="cardGrid">
        {console.log(props.product.name)}
        {/* <div><img className="testImage" src="/images/dog.jpeg" alt=""/></div> */}
        <div><img className="testImage" src={props.product.photos[0].url} alt=""/></div>
        <div>Category</div>
        <div>{props.product.name}</div>
        <div>{props.product.original_price}</div>
        <div>Star Rating</div>
      </div>
    // </div>
  )
}

export default Card;