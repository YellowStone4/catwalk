import React, { useEffect, useState } from 'react';
import Card from './Card.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '../styles.css';
import clsx from 'clsx';

const Carousel = ({product, setProduct, products, productStyles}) => {

  var completeProduct = [];
  for (var i = 0; i < products.length; i++) {
    for (var j = 0; j < productStyles.length; j++) {
      if (products[i].id === Number(productStyles[j].product_id)) {
        var tempProduct = {...products[i], ...productStyles[j]}
        completeProduct.push(tempProduct);
      }
    }
  }

  // console.log(completeProduct);

  const [ currentIndex, setCurrentIndex ] = useState(0)

  const [ cards, setCards ] = useState([])

  useEffect(() => {
    setCards(completeProduct.slice(0, 4));
    // setCurrentIndex(0);
  }, [products, productStyles])

  let prevArrClsx = clsx('carousel_button carousel_button--left arrow-icon', {'hidden': currentIndex === 0 });
  let nextArrClsx = clsx('carousel_button carousel_button--right arrow-icon', {'hidden': currentIndex + 4 === products.length});

  const handleClickPrev = (index) => {
    if (index < 0) {
      return;
    }

    setCurrentIndex(index)
    setCards(completeProduct.slice(index, index + 4));
  }

  const handleClickNext = (index) => {
    if (index + 3 > completeProduct.length - 1) {
      return;
    }

    setCurrentIndex(index)
    setCards(completeProduct.slice(index, index + 4));
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

      <button className={nextArrClsx} onClick={() => handleClickNext(currentIndex + 1)}>
        <FontAwesomeIcon icon={ faArrowRight } />
      </button>
    </div>
  )
}

export default Carousel;