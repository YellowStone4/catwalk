import React, {useState, useEffect} from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faArrowDown, faArrowUp, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Gallery({className, currentstyle: currentStyle, toggle, ...rest}) {
  let photos = currentStyle.photos.map(photo => [photo.thumbnail_url, photo.url]);
  let [currentBackground, setBackground] = useState(photos[0][1]);

  let handleClick = (thumbnail, url) => {
    setBackground(url);
  }

  return (
    <div className={`container ${className}`} style={{backgroundImage: `url(${currentBackground})`}}>

      <div className='thumbnailContainer'>
        <FontAwesomeIcon className='arrow' icon={faArrowUp} />
        {photos.map(([thumbnail, url]) => <img onClick={(event) => handleClick(thumbnail, url)} key={Math.random()} className='img' src={thumbnail} /> )}
        <FontAwesomeIcon className='arrow' icon={faArrowDown} />
      </div>

      <FontAwesomeIcon onClick={toggle} className='icon' icon={faExpand} />
    </div>
  )
}

export default Gallery;
