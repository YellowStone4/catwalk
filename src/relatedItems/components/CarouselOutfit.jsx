import React, { useEffect, useState } from 'react';
import CardOutfit from './CardOutfit.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import '../styles.css';
import clsx from 'clsx';

const CarouselOutfit = ({product, setProduct, products}) => {


  const myStorage = window.localStorage;

  const [ currentIndex, setCurrentIndex ] = useState(0)

  const [ cards, setCards ] = useState([])


  useEffect(() => {
    var values = [],
    keys = Object.keys(myStorage),
    i = keys.length;
    while ( i-- ) {
      values.push(JSON.parse(myStorage.getItem(keys[i]) ));
    }
    if (values.length > 3) {
      setCards(values.slice(0, 3));
    } else {
      setCards(values);
    }
  }, [product])

  // console.log('hey', cards);

  let prevArrClsx = clsx('carousel_button carousel_button--left arrow-icon', {'hidden': currentIndex === 0 });
  let nextArrClsx = clsx('carousel_button carousel_button--right arrow-icon', {'hidden': myStorage.length < 3 || currentIndex + 3 === myStorage.length});

  const handleClickPrev = (index) => {
    if (index < 0) {
      return;
    }
    var values = [],
    keys = Object.keys(myStorage),
    i = keys.length;
    while ( i-- ) {
      values.push(JSON.parse(myStorage.getItem(keys[i]) ));
    }

    setCurrentIndex(index)
    setCards(values.slice(index, index + 3));
  }

  const handleClickNext = (index) => {
    var values = [],
    keys = Object.keys(myStorage),
    i = keys.length;
    while ( i-- ) {
      values.push(JSON.parse(myStorage.getItem(keys[i]) ));
    }
    if (index + 2 > values.length - 1) {
      return;
    }

    setCurrentIndex(index)
    setCards(values.slice(index, index + 3));
  }

  const handleClickOutfit = () => {
    myStorage.setItem(`${product.id}`, JSON.stringify(product));
    var values = [],
    keys = Object.keys(myStorage),
    i = keys.length;
    while ( i-- ) {
      values.push(JSON.parse(myStorage.getItem(keys[i]) ));
    }

    if (values.length > 3) {
      setCards(values.slice(0, 3));
    } else {
      setCards(values);
    }
  }


  return (
    <div className="carousel">
      {/* {console.log(props.products)} */}
      <button className={prevArrClsx} onClick={() => handleClickPrev(currentIndex - 1)}>
      <FontAwesomeIcon icon={ faArrowLeft } />
      </button>



      <div className='outfit-card'>
        <div className='outfit-text'>Add to Outfit</div>
        <button className='add-button' onClick={() => handleClickOutfit()}>
          <FontAwesomeIcon icon={ faPlusCircle } size = '6x'/>
        </button>
      </div>


      <ul className="carousel_track-outfit">
         {cards.map((item, index) => {
            // console.log('test', item)
            return <li key={Math.random() * 100} className='card_slide-outfit' > <CardOutfit product={item} setProduct={setProduct} storage={myStorage} cards={cards} setCards={setCards}/>
            </li>
        })}
      </ul>



      <button className={nextArrClsx} onClick={() => handleClickNext(currentIndex + 1)}>
        <FontAwesomeIcon icon={ faArrowRight } />
      </button>
    </div>
  )
}

export default CarouselOutfit;