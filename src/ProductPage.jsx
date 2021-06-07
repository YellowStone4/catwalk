/* eslint-disable no-console */
import React from 'react';
import FrequentQuestions from './frequentQuestions/FrequentQuestions';
import Overview from './overview/Overview';
import Ratings from './ratings/Ratings';
import RelatedItems from './relatedItems/RelatedItems';
import Search from './Search';

function ProductPage({ product }) {
  if (product) {
    return (
      <>
        <Search />
        <Overview product={product} />
        <RelatedItems />
        <FrequentQuestions product={product} />
        <Ratings />
      </>
    );
  } return null;
}

export default ProductPage;
