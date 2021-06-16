import React, {useState, useEffect} from 'react';
import './Sass/styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faArrowDown, faArrowUp, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

function Gallery({className, style, toggle, ...rest}) {
  let photos = style.photos.map(photo => [photo.thumbnail_url, photo.url]);
  let [currentIndex, setIndex] = useState(0);
  let [currentBackground, setBackground] = useState(style.photos[0].url);
  let [[start, end], setGoalPosts] = useState([0, 4]);
  let [isActiveIndex, setIsActiveIndex] = useState(0);

  useEffect(() => {
    setBackground(style.photos[0].url)
  }, [style])

  let prevArrClsx = clsx('arrow', {'hidden': start === 0 });
  let nextArrClsx = clsx('arrow', {'hidden': !(end < photos.length - 1)});

  let handleClick = (index, direction) => {
    // A flag to make sure that carouselController does not run after resetting goal posts to initial state.
    let isInRange = true;
    if (index < 0) {
      index = photos.length - 1;
      setGoalPosts([1, 5])
      isInRange = false;
      console.log('[start, end', [0, 4])
    }

    if (index === photos.length) {
      index = 0;
      setGoalPosts([0, 4])
      isInRange = false;
    }

    if ((index > end || index < start) && isInRange) {
      carouselController(direction)
    }

      setIndex(index);
      setBackground(photos[index][1]);
      setIsActiveIndex(index);
  }

  let carouselController = (direction) => setGoalPosts([start + direction, end + direction]);


  return (
    <div className={`container ${className}`} style={{backgroundImage: `url(${currentBackground})`}}>

      <div className='thumbnailContainer'>

         <FontAwesomeIcon className={prevArrClsx} onClick={() => carouselController(-1)} icon={faArrowUp} />

        {photos.map((photo, index) => {
          if (index < start || index > end) return;
          let className = index === isActiveIndex ? 'img active' : 'img';
          return <img onClick={() => handleClick(index)} key={Math.random()} className={className} src={photo[0]} />
        })}

          <FontAwesomeIcon className={nextArrClsx} onClick={() => carouselController(1)} icon={faArrowDown} />
      </div>


      <div className='carouselControlContainer'>
        <FontAwesomeIcon className='arrow' onClick={() => handleClick(currentIndex - 1, -1)} icon={faArrowLeft} />
        <FontAwesomeIcon className='arrow' onClick={() => handleClick(currentIndex + 1, 1)} icon={faArrowRight} />
      </div>


      <FontAwesomeIcon onClick={toggle} className='icon' icon={faExpand} />
    </div>
  )
}

export default Gallery;
