import React from 'react';
import '../styles.css';

const carouselContainer = {
  height: '450px',
  background: 'lightyellow',
  paddingLeft: '10px',
  paddingTop: '30px'
}


const cardGrid = {
  background: 'lightBlue',
  padding: '3px',
}

const Card = () => {
  return (
    <div className='container_slider'>
      <div className="card">
        <div>IMAGE</div>
        <div style={cardGrid}>Product Image</div>
        <div style={cardGrid}>Product Name</div>
        <div style={cardGrid}>Product Price</div>
        <div style={cardGrid}>Star Rating</div>
      </div>
    </div>
  )
}

export default Card;