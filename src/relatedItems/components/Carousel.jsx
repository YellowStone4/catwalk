import React, { useEffect, useState } from 'react';
import Card from './Card.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import '../styles.css';

const Carousel = ({product, setProduct, products}) => {

  // console.log(products);

  const [ currentIndex, setCurrentIndex ] = useState(0)

  const [ cards, setCards ] = useState([])

  useEffect(() => {
    setCards(products.slice(0, 4));
  }, [products])

  const handleClickPrev = (index) => {
    // console.log(index);
    if (index < 0) {
      return;
    }

    setCurrentIndex(index)
    setCards(products.slice(index, index + 4));
  }

  const handleClickNext = (index) => {
    if (index + 3 > products.length - 1) {
      return;
    }

    setCurrentIndex(index)
    setCards(products.slice(index, index + 4));
  }


  return (
    <div className="carousel">
      {/* {console.log(props.products)} */}
      <button className="carousel_button carousel_button--left" onClick={() => handleClickPrev(currentIndex - 1)}>
      <FontAwesomeIcon icon={ faAngleLeft } size = '4x'/>
      </button>

      <ul className="carousel_track">
         {cards.map((item, index) => {
            return <li key={Math.random() * 100} className='card_slide' > <Card currentProduct={item} product={product} setProduct={setProduct} />
            </li>
        })}
      </ul>

      <button className="carousel_button carousel_button--right" onClick={() => handleClickNext(currentIndex + 1)}>
        <FontAwesomeIcon icon={ faAngleRight } size = '4x'/>
      </button>
    </div>
  )
}

export default Carousel;