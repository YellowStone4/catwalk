import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft, faStar } from '@fortawesome/free-solid-svg-icons'
import { API_KEY } from '/config.js'
import axios from 'axios';
import '../styles.css';
import Modal from './Modal.jsx';


const Card = ({ currentProduct, product, setProduct }) => {

  const [ productId, setProductId ] = useState('')

  const [ stylePhoto, setStylePhoto ] = useState('')

  const [ showModal, setShowModal ] = useState(false)




  useEffect(() => {
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
          console.log(res.data.product_id)
          setStylePhoto(res.data.results[0].photos[0].thumbnail_url)
          setProductId(res.data.product_id)
        });
  }, [product]);


  return (
    // <div className='container_slider'>
      <div className="cardGrid" >
        {/* {console.log(product.name)} */}
        {/* <Modal show={showModal}/> */}
        <FontAwesomeIcon className="starIcon" icon={ faStar } onClick={() => setShowModal(true)} />
        <div>
          {/* {style} */}
          <img className="testImage" src={stylePhoto} alt="" onClick={() => setProduct(productId)}/>
          {/* <FontAwesomeIcon className="starIcon" icon={ faAngleLeft } size = '4x'/> */}
        </div>
        <div className="row-text">{product.category}</div>
        <div className="row-text">{product.name}</div>
        <div className="row-text">${product.default_price}</div>
        <div className="row-text">Star Rating</div>
        <Modal currentProduct={currentProduct} product={product} showModal={showModal} setShowModal={setShowModal}/>
      </div>
    // </div>
  )
}

export default Card;