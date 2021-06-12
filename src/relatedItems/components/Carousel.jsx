import React, { useEffect, useState } from 'react';
import Card from './Card.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import '../styles.css';

const Carousel = (props) => {

  const [ currentIndex, setCurrentIndex ] = useState(0)

  const [ cards, setCards ] = useState([])


  useEffect(() => {
    setCards(props.products.slice(0, 4));
  }, [props.products])

  const handleClickPrev = (index) => {
    if (index + 3 > props.products.length - 1) {
      return;
    }

    setCurrentIndex(index)
    setCards(props.products.slice(index, index + 4));
  }

  const handleClickNext = (index) => {
    if (index < 0) {
      return;
    }

    setCurrentIndex(index)
    setCards(props.products.slice(index, index + 4));
  }


  return (
    <div className="carousel">
      {/* {console.log(props.products)} */}
      <button className="carousel_button carousel_button--left" onClick={() => handleClickPrev(currentIndex + 1)}>
      <FontAwesomeIcon icon={ faAngleLeft } size = '4x'/>
        {/* <img src="/images/left.png" atl=""/> */}
      </button>

      <ul className="carousel_track">
         {cards.map((item, index) => {
            return <li key={item.style_id} className='card_slide' > <Card product={item}/></li>
        })}
      </ul>

      <button className="carousel_button carousel_button--right" onClick={() => handleClickNext(currentIndex - 1)}>
        <FontAwesomeIcon icon={ faAngleRight } size = '4x'/>
        {/* <img src="/images/right.png" atl=""/> */}
      </button>
    </div>
  )
}

export default Carousel;