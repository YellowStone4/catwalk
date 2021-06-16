import React, { useEffect, useState } from 'react';
import '../styles.css';


const Modal = ( { currentProduct, product, showModal, setShowModal } ) => {

  // useEffect(() => {
  //   const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${product.id}/styles`;
  //     const config = {
  //       headers: {
  //         Authorization: API_KEY,
  //       }
  //       // params: {
  //       //   product_id: "19089",
  //       // }
  //     };
  //     axios.get(url, config)
  //       .then((res) => {
  //         console.log(res.data.product_id)
  //         setStylePhoto(res.data.results[0].photos[0].thumbnail_url)
  //         setProductId(res.data.product_id)
  //       });
  // }, [product]);

  const showHideClassName = showModal ? "modal display-block" : "display-none";

  return (
    <div className={showHideClassName}>
      <section className='modal-main modalGrid'>
        <div>COMPARISON</div>
        <div></div>
        <div>{product.id}</div>
        <div>{currentProduct.id}</div>
        <button className='buttonModal' onClick ={() => setShowModal(false)}>
          x
        </button>
      </section>
    </div>
  )

}


export default Modal;