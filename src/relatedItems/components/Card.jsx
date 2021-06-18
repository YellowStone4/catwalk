import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft, faStar } from '@fortawesome/free-solid-svg-icons'
import { API_KEY } from '/config.js'
import axios from 'axios';
import '../styles.css';
import Modal from './Modal.jsx';
import defaultImage from '../../../dist/images/default-product-image.png';


const Card = ({ currentProduct, product, setProduct }) => {

  const [ productId, setProductId ] = useState('')

  const [ stylePhoto, setStylePhoto ] = useState('')

  const [ showModal, setShowModal ] = useState(false)


  useEffect(() => {
    let mounted = true;
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${currentProduct.id}/styles`;
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
            setProductId(res.data.product_id)
          }
        })
    return () => mounted = false;
  }, [product]);


  return (
      <div className="cardGrid" >
        <FontAwesomeIcon className="starIcon" icon={ faStar } onClick={() => setShowModal(true)} />
        <div>
          <img className="productImage" src={stylePhoto} alt="" onClick={() => setProduct(currentProduct)}/>
        </div>
        <div className="row-text">{currentProduct.category}</div>
        <div className="row-text">{currentProduct.name}</div>
        <div className="row-text">${currentProduct.default_price}</div>
        <div className="row-text">Star Rating</div>
        <Modal currentProduct={currentProduct} product={product} showModal={showModal} setShowModal={setShowModal}/>
      </div>
  )
}

export default Card;