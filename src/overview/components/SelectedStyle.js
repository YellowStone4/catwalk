import React from 'react';
import './styles.css';

function SelectedStyle({setCurrentStyle, productStyles, ...rest}) {
  return (
    <div className='styleSelection'>
      <p><b>STYLE ></b> SELECTED STYLE</p>
        <div className='productStyles'>
          {
            productStyles.map((style, i) => {
              return <div key={i} onClick={() => setCurrentStyle(style)} style={{backgroundImage:`url(${style.photos[0].thumbnail_url})`}} />
            })
          }

        </div>

    </div>
  );
}


export default SelectedStyle;