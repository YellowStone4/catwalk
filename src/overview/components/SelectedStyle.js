import React from 'react';
import './styles.css';

function SelectedStyle({setCurrentStyle, productStyles, ...rest}) {
  console.log('Set current: ', setCurrentStyle);
  console.log('product', productStyles);

  return (
    <div className='styleSelection'>
      <p><b>STYLE ></b> SELECTED STYLE</p>
        <div className='productStyles'>
          {
            productStyles.map((style, i) => {
              console.log('photo: ', style)
              return <div onClick={() => setCurrentStyle(style)} style={{backgroundImage:`url(${style.photos[0].thumbnail_url})`}} />
            })
          }

        </div>

    </div>
  );
}


export default SelectedStyle;