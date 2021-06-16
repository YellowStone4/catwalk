import React, { useEffect, useState } from 'react';
import CardOutfit from './CardOutfit.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import '../styles.css';

const CarouselOutfit = ({product, setProduct, products}) => {


  const myStorage = window.localStorage;

  // console.log(myStorage);

  const [ currentIndex, setCurrentIndex ] = useState(0)

  const [ cards, setCards ] = useState([])

  useEffect(() => {
    var values = [],
        keys = Object.keys(myStorage),
        i = keys.length;
    while ( i-- ) {
        values.push(JSON.parse(myStorage.getItem(keys[i]) ));
    }
    setCards(values);
  }, [product])

  // console.log('hey', cards);

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

  const handleClickOutfit = () => {
    myStorage.setItem(`${product.id}`, JSON.stringify(product));
    // var retrievedObject = localStorage.getItem('testObject');
    // console.log('retrievedObject: ', myStorage);
    var values = [],
    keys = Object.keys(myStorage),
    i = keys.length;
    while ( i-- ) {
        values.push(JSON.parse(myStorage.getItem(keys[i]) ));
    }
    setCards(values);
    // setCards(myStorage)

    // console.log('retrievedObject: ', myStorage);
  }


  return (
    <div className="carousel">
      {/* {console.log(props.products)} */}
      <button className="carousel_button carousel_button--left" onClick={() => handleClickPrev(currentIndex - 1)}>
      <FontAwesomeIcon icon={ faAngleLeft } size = '4x'/>
      </button>



      <div className='outfit-card'>
        <div className='outfit-text'>Add to Outfit</div>
        <button className='add-button' onClick={() => handleClickOutfit()}>
          <FontAwesomeIcon icon={ faPlusCircle } size = '6x'/>
        </button>
      </div>


      <ul className="carousel_track-outfit">
         {cards.map((item, index) => {
            return <li key={Math.random() * 100} className='card_slide' > <CardOutfit currentProduct={item} product={product} setProduct={setProduct} />
            </li>
        })}
      </ul>



      <button className="carousel_button carousel_button--right" onClick={() => handleClickNext(currentIndex + 1)}>
        <FontAwesomeIcon icon={ faAngleRight } size = '4x'/>
      </button>
    </div>
  )
}

export default CarouselOutfit;