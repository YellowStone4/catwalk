import React, {useState, useEffect} from 'react';
import './Sass/styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus, faChevronDown, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

function CartButtons({currentStyle, ...rest}) {
  const [liked, setLiked] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
      setLiked(false);
  }, [currentStyle])

  const sizeCount = new Map();
  let likeClx = clsx('cartBtn', 'item4');


  let skus = Object.values(currentStyle.skus);
  skus.forEach(({quantity, size}) => {
    sizeCount.set(size, quantity);
  })


    return (
      <section className='cartBtnSection'>
        <div id="cart" className="cart" data-count={`${cartCount}`}>
          <FontAwesomeIcon icon={faShoppingCart}/>
        </div>

        <div className='cartBtnWrapper'>
          <select className='cartBtn item1' name="size" >
            <option>SIZE </option>

          </select>
          <select className='cartBtn item2' name='quant'>
            <option>QUANTITY</option>
          </select>
          <button onClick={() => setCartCount(cartCount + 1)} className='cartBtn item3'><span>ADD</span> <FontAwesomeIcon icon={faPlus} /></button>
          <button className={likeClx} onClick={() => setLiked(!liked)}><FontAwesomeIcon className={clsx({'liked': liked})} icon={faStar} /></button>
        </div>
      </section>

    )
}

export default CartButtons;
