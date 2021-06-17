import React, { useEffect, useState } from 'react';
import '../styles.css';


const Modal = ( { currentProduct, product, showModal, setShowModal } ) => {

  const showHideClassName = showModal ? "modal display-block" : "display-none";

  return (
    <div className={showHideClassName}>
      {/* <section className='modal-main modalGrid'> */}
      <section className='modal-main'>
        <div className='modal-main-title'>COMPARISON</div>
        <div className='modal-product-name-left modal-product-name'>{product.name}</div>
        <div className='modal-product-features-left'>
          {product.features.map(item => (<div key={Math.random() * 100} >{item.feature}: {item.value}</div>))}
        </div>
        <div className='modal-product-name-right modal-product-name' >{currentProduct.name}</div>
        <div className='modal-product-features-right'>
          {currentProduct.features.map(item => (<div key={Math.random() * 100}>{item.feature}: {item.value}</div>))}
        </div>
        <button className='buttonModal' onClick ={() => setShowModal(false)}>
          x
        </button>
      </section>
    </div>
  )

}


export default Modal;