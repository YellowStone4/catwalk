import React from 'react';

const containerStyle = {
  backgroundColor: 'whitesmoke',
  display: 'grid',
  gridTemplateColumns: 'minmax(150px, 75%) 1fr',
  height: '100%'
}

const articleStyle = {
  borderRight: '1px solid black',
  padding: '5px 10px',
}

function ProductDescription({product, ...rest}) {

  return (
    <div style={containerStyle}>
      <article style={articleStyle}>
        <h3>{product.slogan}</h3>
        <p>{product.description}</p>
      </article>
      <aside>
        <ul style={{paddingTop: '10px'}}>
         {product.features.map(item => <li key={Math.random()}  style={{margin:'10px'}}>{item.feature}: {item.value}</li>)}
        </ul>
      </aside>
    </div>
  )
}

export default ProductDescription;