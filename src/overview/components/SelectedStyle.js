import React, {useState} from 'react';
import './styles.css';
import clsx from 'clsx';

function SelectedStyle({setCurrentStyle, productStyles, ...rest}) {
  const [checkedStyle, setCheckedStyle] = useState(0);

  function handleClick(style, i) {
    setCurrentStyle(style);
    setCheckedStyle(i);
  }

  return (
    <div className='styleSelection'>
      <p><b>STYLE ></b> SELECTED STYLE</p>
        <div className='productStyles'>
          {
            productStyles.map((style, i) => {
              let classes = clsx({selectedInput: i === checkedStyle})
              return (
              <div className='styleIconWrapper'>
                  {/* <input type="radio" name="radioStyle" value="small"/> */}
                  <div className='styleIcons' key={i} onClick={() => handleClick(style, i)} style={{backgroundImage:`url(${style.photos[0].thumbnail_url})`}} />
                  <span class={classes}>
                    <div className={clsx({checkCircle: i === checkedStyle })}></div>
                    <div className={clsx({checkStem: i === checkedStyle })}></div>
                    <div className={clsx({checkKick: i === checkedStyle })}></div>
                  </span>
              </div>
              )
            })
          }

        </div>

    </div>
  );
}


export default SelectedStyle;