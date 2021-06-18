import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { API_KEY } from '/config.js'
import axios from 'axios';
import '../styles.css';
import Modal from './Modal.jsx';
import defaultImage from '../../../dist/images/default-product-image.png';


const CardOutfit = ({ currentProduct, product, setProduct, storage, cards, setCards, setCurrentIndex }) => {


  const [ stylePhoto, setStylePhoto ] = useState('')

  const [ showModal, setShowModal ] = useState(false)


  useEffect(() => {
    let mounted = true;
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${product.id}/styles`;
      const config = {
        headers: {
          Authorization: API_KEY,
        }
        // params: {
        //   product_id: "19089",
        // }
      };
      axios.get(url, config)
        .then((res) => {
          if (mounted = true) {
            // console.log(res.data.product_id)
            if (res.data.results[0].photos[0].thumbnail_url) {
              setStylePhoto(res.data.results[0].photos[0].thumbnail_url)
            } else {
              setStylePhoto(defaultImage)
            }
          }
        });
        return () => mounted = false;
  }, [product]);

  const handleClick = (key) => {
    storage.removeItem(key)
    var values = [],
    keys = Object.keys(storage),
    i = keys.length;
    while ( i-- ) {
      values.push(JSON.parse(storage.getItem(keys[i]) ));
    }
    if (values.length > 3) {
      setCards(values.slice(0, 3));
    } else {
      setCards(values);
    }
    // setCurrentIndex(0);
  }


  return (
      <div className="cardGrid" >
        <FontAwesomeIcon className="starIcon" icon={ faTimesCircle } size='2x' onClick={() => handleClick(product.id)} />
        <div>
          <img className="productImage-outfit" src={stylePhoto} alt=""/>
        </div>
        <div className="row-text">{product.category}</div>
        <div className="row-text">{product.name}</div>
        <div className="row-text">${product.default_price}</div>
        <div className="row-text">Star Rating</div>
      </div>
  )
}

export default CardOutfit;