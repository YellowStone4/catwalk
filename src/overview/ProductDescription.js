import React from 'react';

const containerStyle = {
  backgroundColor: '#fb9300',
  display: 'grid',
  gridTemplateColumns: 'minmax(150px, 75%) 1fr',
  height: '100%',
  padding: '20px',
  paddingRight: '30px',
  fontSize: '1.3rem'
}

const articleStyle = {
  borderRight: '1px solid black',
  width: '90%',
}

function ProductDescription({product, ...rest}) {
  let features = product.features === undefined ? [] : product.features;

  return (
    <div style={containerStyle}>
      <article style={articleStyle}>
        <h3>{product.slogan}</h3>
        <p>{product.description}</p>
      </article>
      <aside>
        <ul style={{paddingTop: '10px'}}>
         {features.map(item => <li key={Math.random()}>{item.feature}: {item.value}</li>)}
        </ul>
      </aside>
    </div>
  )
}

export default ProductDescription;