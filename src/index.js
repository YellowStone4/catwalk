import React from 'react';
import { render } from 'react-dom';
import FrequentQuestions from './frequentQuestions/FrequentQuestions.js';
import Overview from './overview/Overview.js';
import Ratings from './ratings/Ratings.js';
import RelatedItems from './relatedItems/RelatedItems.js';
import Search from './Search.js';

function App() {

  return (
    <>
    <Search />
    <Overview />
    <RelatedItems />
    <FrequentQuestions />
    <Ratings />
    </>
    )

}

render (<App />, document.getElementById('react-root'));