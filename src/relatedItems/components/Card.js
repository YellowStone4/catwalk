import React, { useEffect, useState } from 'react';
import axios from 'axios';


const cardGrid = {
  //background: 'lightBlue',
  padding: '3px',
}

const Card = (props) => {

  return (
    // <div className='container_slider'>
      <div className="cardGrid">
        {/* {console.log(props.products)} */}
        <div><img className="testImage" src="/images/dog.jpeg" alt=""/></div>
        <div style={cardGrid}>{props.products.category}</div>
        <div style={cardGrid}>{props.products.name}</div>
        <div style={cardGrid}>{props.products.default_price}</div>
        <div style={cardGrid}>Star Rating</div>
      </div>
    // </div>
  )
}

export default Card;