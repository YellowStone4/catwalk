import React from 'react';

const sectionContainerStyle = {
  padding: '20px',
}

const circleStyle = {
  background: 'lightblue',
  borderRadius: '50%',
  width: '60px',
  height: '60px'
}

const circleContainerSt = {
  display: 'grid',
  gridTemplateColumns: '100px 100px 100px 100px',
  gridGap: '5px',
  marginBottom: '30px'
}

const addToCartSt = {

  display: 'grid',
  gridTemplateColumns: '100px 100px',
  gridGap: '50px',
}

const btnStyle = {
  margin: '10px',
  height: '50px',
  backgroundColor: '#fff',
  borderRadius: '3px',
  border: '1px solid #c4c4c4',
  fontSize: '2rem',
  color: '#333',
  cursor: 'pointer'
}


function Selection() {
  return (
    <div style={sectionContainerStyle} >
      <div className='basicInfo'>
        <p>***** <a href='#'>Read all reviews</a></p>
        <p>CATEGORY</p>
        <h3>EXPANDED PRODUCT NAME</h3>
        <p>$369</p>
      </div>
      <div className='styleSelection'>
        <p><b>STYLE ></b> SELECTED STYLE</p>
        <div style={circleContainerSt}>
          <div style={circleStyle}></div><div style={circleStyle}></div><div style={circleStyle}></div>
          <div style={circleStyle}></div><div style={circleStyle}></div><div style={circleStyle}></div>
          <div style={circleStyle}></div><div style={circleStyle}></div>
        </div>

      </div>
      <div className='addToCartSt'>
        <button style={btnStyle}>SELECT SIZE  V </button><button style={btnStyle}>1   V</button>
        <button style={btnStyle}>ADD TO BAG      +</button><button style={btnStyle}>*</button>

      </div>
    </div>
  )
}

export default Selection;