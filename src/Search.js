import React from 'react';

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'pink',
};

const pStyle = {
  flexGrow: '1',
  marginLeft: '10px',
  fontSize: '2rem',
  textDecoration: 'underline 2px black solid',
  textUnderlineOffset: '20%',
};

const searchWrapper = {
  marginRight: '30px',
  paddingRight: '20px',
  borderRadius: '20px',
  height: '40px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0 2px 6px 0 rgba(140, 150, 170, .2), 0 24px 20px -24px rgba(71, 82, 107, .1)',
  overflow: 'hidden',
  background: 'white',
};

const searchInput = {
  border: 'none',
  outline: 'none',
  padding: '0 20px',
  fontSize: '16px',
};

const svgStyle = {
  height: '20',
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeWidth: '2',
}


function Search() {
  return (
    <>
    <header style={headerStyle}>
      <p style={pStyle}> Cat Walk</p>
      <div style={searchWrapper}>
        <input style = {searchInput} type="text" placeholder="Search" />
        <svg style = {svgStyle} viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="M21 21l-4.35-4.35"></path>
        </svg>
      </div>
    </header>
    <div>
      <p style={{textAlign: 'center'}}>SITE-WIDE ANNOUNCEMENT MESSAGE! — SALE / DISCOUNT <b>OFFER</b> — <u>NEW PRODUCT HIGHLIGHT</u></p>
    </div>
    </>
  )
};



export default Search;