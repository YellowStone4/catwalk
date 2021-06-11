import React, {useState, useEffect} from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faArrowDown, faArrowUp, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Gallery({className, style, toggle, ...rest}) {
  let photos = style.photos.map(photo => [photo.thumbnail_url, photo.url]);
  let [currentIndex, setIndex] = useState(0);
  let [currentBackground, setBackground] = useState(photos[currentIndex][1]);
  let [goalPosts, setGoalPosts] = useState([0, 4]);

  let handleClick = (index) => {
    if (index < 0) index = photos.length - 1;
    if (index >= photos.length) index = 0;

    if (index < goalPosts[0]) {
      goalPosts[0]--
      goalPosts[1]--;
    } else if (index > goalPosts[1]) {
      goalPosts[0]++;
      goalPosts[1]++;
    }

    setIndex(index);
    setBackground(photos[index][1]);
  }

  return (
    <div className={`container ${className}`} style={{backgroundImage: `url(${currentBackground})`}}>

      <div className='thumbnailContainer'>
        <FontAwesomeIcon className='arrow' onClick={() => handleClick(currentIndex - 1)} icon={faArrowUp} />
        {photos.map((photo, index) => {
          if (index < goalPosts[0] || index > goalPosts[1]) return;
          let className = index === currentIndex ? 'img active' : 'img';
          return <img onClick={() => handleClick(index)} key={Math.random()} className={className} src={photo[0]} />
        })}
        <FontAwesomeIcon className='arrow' onClick={() => handleClick(currentIndex + 1)} icon={faArrowDown} />
      </div>

      <div className='carouselControlContainer'>
        <FontAwesomeIcon className='arrow' onClick={() => handleClick(currentIndex + 1)} icon={faArrowLeft} />
        <FontAwesomeIcon className='arrow' onClick={() => handleClick(currentIndex + 1)} icon={faArrowRight} />
      </div>


      <FontAwesomeIcon onClick={toggle} className='icon' icon={faExpand} />
    </div>
  )
}

export default Gallery;
