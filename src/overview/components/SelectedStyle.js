import React from 'react';
import './styles.css';

function SelectedStyle({setCurrentStyle, productStyles, ...rest}) {
<<<<<<< HEAD
  console.log('Set current: ', setCurrentStyle);
  console.log('product', productStyles);

=======
>>>>>>> 080736b363a4c7e3c5a31cd03350d48699de05c2
  return (
    <div className='styleSelection'>
      <p><b>STYLE ></b> SELECTED STYLE</p>
        <div className='productStyles'>
          {
            productStyles.map((style, i) => {
<<<<<<< HEAD
              console.log('photo: ', style)
              return <div onClick={() => setCurrentStyle(style)} style={{backgroundImage:`url(${style.photos[0].thumbnail_url})`}} />
=======
              return <div key={i} onClick={() => setCurrentStyle(style)} style={{backgroundImage:`url(${style.photos[0].thumbnail_url})`}} />
>>>>>>> 080736b363a4c7e3c5a31cd03350d48699de05c2
            })
          }

        </div>

    </div>
  );
}


export default SelectedStyle;