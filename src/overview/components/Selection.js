import React from 'react';
import './selection.css';

function Selection() {

  return (
    <div className='sectionContainer' >
      <div className='basicInfo'>
        <p>***** <a href='#'>Read all reviews</a></p>
        <p>CATEGORY</p>
        <h3>EXPANDED PRODUCT NAME</h3>
        <p>$369</p>
      </div>

      <div className='styleSelection'>
        <p><b>STYLE ></b> SELECTED STYLE</p>

        <div className='circleContainer'>
          <div className='circle'/> <div className='circle'/> <div className='circle'/>
          <div className='circle'/> <div className='circle'/> <div className='circle'/>
          <div className='circle'/> <div className='circle'/>
        </div>

      </div>

      <div className='cartContainer'>
        <button className='btn'> SELECT SIZE V </button> <button className='btn'> 1 v </button>
        <button className='btn'> ADD TO BAG +</button> <button className='btn'>*</button>

      </div>
    </div>
  )
}

export default Selection;