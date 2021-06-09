import React from 'react';

const carouselContainer = {
  height: '450px',
  background: 'lightyellow',
  paddingLeft: '10px',
  paddingTop: '30px'
}


const cardContainer = {
  display: 'grid',
  gridTemplateRows: '280px 28px 28px 28px 28px',
  rowGap: '2px',
  padding: '10px',
  position: 'relative',
  height: '400px',
  width: '300px',
  border: '1px solid black',
  background: 'pink',
  alignment: 'center'
}


const cardGrid = {
  background: 'lightBlue',
  padding: '3px',
}

const Card = () => {
  return (
    <div style={carouselContainer}>
      <div style={cardContainer}>
        <div style={cardGrid}>IMAGE</div>
        <div style={cardGrid}>Product Image</div>
        <div style={cardGrid}>Product Name</div>
        <div style={cardGrid}>Product Price</div>
        <div style={cardGrid}>Star Rating</div>
      </div>
    </div>
  )
}

export default Card;