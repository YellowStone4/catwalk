/* eslint-disable no-console */
import React from 'react';
import FrequentQuestions from './frequentQuestions/FrequentQuestions.jsx';
import Overview from './overview/Overview';
import Ratings from './ratings/Ratings';
import RelatedItems from './relatedItems/RelatedItems.jsx';
import Search from './Search.jsx';

function ProductPage({ product }) {

  if (product) {
    return (
      <>
        <Search />
        <Overview product={product} />
        <RelatedItems product={product} />
        <FrequentQuestions product={product} />
        <Ratings product={product} />
      </>
    );
  } return null;
}

export default ProductPage;
