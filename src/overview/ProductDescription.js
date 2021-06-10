import React from 'react';

const containerStyle = {
  backgroundColor: 'whitesmoke',
  display: 'grid',
  gridTemplateColumns: 'minmax(150px, 75%) 1fr'
}

const articleStyle = {
  borderRight: '1px solid black',
  padding: '5px 10px',
}

function ProductDescription() {
  return (
    <div style={containerStyle}>
      <article style={articleStyle}>
        <h3>Prouct Slogan. Pithy Description or Catchphrase.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quisquam laborum excepturi. Ipsum sunt rerum ea adipisci dicta repudiandae, quos magnam ipsam earum distinctio amet? Iste veritatis voluptatem est corrupti!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem saepe quaerat eius tenetur quasi! Ducimus soluta dolorem, repellendus vel obcaecati beatae.</p>
      </article>
      <aside>
        <ul>
          <li>GMO and Pesticide-free</li>
          <li>Made with 100% Genetic Modification</li>
          <li>This is made up</li>
          <li>It doesn't matter</li>
        </ul>
      </aside>
    </div>
  )
}

export default ProductDescription;