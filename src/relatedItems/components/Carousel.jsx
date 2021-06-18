import React, { useEffect, useState } from 'react';
import Card from './Card.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '../styles.css';
import clsx from 'clsx';

const Carousel = ({product, setProduct, products}) => {

  // console.log(products);

  const [ currentIndex, setCurrentIndex ] = useState(0)

  const [ cards, setCards ] = useState([])

  useEffect(() => {
    setCards(products.slice(0, 4));
    // setCurrentIndex(0);
  }, [products])

  let prevArrClsx = clsx('carousel_button carousel_button--left arrow-icon', {'hidden': currentIndex === 0 });
  let nextArrClsx = clsx('carousel_button carousel_button--right arrow-icon', {'hidden': currentIndex + 4 === products.length});

  const handleClickPrev = (index) => {
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
      <button className={prevArrClsx} onClick={() => handleClickPrev(currentIndex - 1)}>
      <FontAwesomeIcon icon={ faArrowLeft }/>
      </button>

      <ul className="carousel_track">
         {cards.map((item, index) => {
            return <li key={Math.random() * 100} className='card_slide' > <Card currentProduct={item} product={product} setProduct={setProduct} />
            </li>
        })}
      </ul>

      <button className={nextArrClsx} disabled={currentIndex === products.length - 4} onClick={() => handleClickNext(currentIndex + 1)}>
        <FontAwesomeIcon icon={ faArrowRight } />
      </button>
    </div>
  )
}

export default Carousel;