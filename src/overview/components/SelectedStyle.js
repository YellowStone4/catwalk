import React, {useState} from 'react';
import './styles.css';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';

function SelectedStyle({setCurrentStyle, currentStyle, productStyles, ...rest}) {
  const [checkedStyle, setCheckedStyle] = useState(0);

  function handleClick(style, i) {
    setCurrentStyle(style);
    setCheckedStyle(i);
  }

{console.log('currentStyle: ', currentStyle)}

  return (
    <div className='styleSelection'>
      <p><b>STYLE</b> <FontAwesomeIcon icon={faChevronRight}/> {currentStyle.name}</p>
        <div className='productStyles'>
          {
            productStyles.map((style, i) => {
              return (
              <div className='styleIconWrapper'>
                  {/* <input type="radio" name="radioStyle" value="small"/> */}
                  <div className='styleIcons' key={i} onClick={() => handleClick(style, i)} style={{backgroundImage:`url(${style.photos[0].thumbnail_url})`}} />
                  <span className={clsx({selectedInput: i === checkedStyle})}>
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