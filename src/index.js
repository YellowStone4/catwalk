import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import FrequentQuestions from './frequentQuestions/FrequentQuestions.js';
import Overview from './overview/Overview.js';
import Ratings from './ratings/Ratings';
import RelatedItems from './relatedItems/RelatedItems';
import Search from './Search';
import { API_KEY } from '../config';

class App extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
      product: undefined,
    };
  }

  componentDidMount() {
    console.log('running compnent did mount');
    this.fetchProduct();
  }

  fetchProduct() {
    console.log('fetching product');
    const config = {
      headers: {
        Autorization: API_KEY,
      },
    };
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/19089', config)
      .then((data) => console.log(data))
      .catch((err) => console.log('error getting product.... ', err));
  }

  render() {
    console.log('running render');

    return (
      <>
        <Search />
        <Overview />
        <RelatedItems />
        <FrequentQuestions />
        <Ratings />
      </>
    );
  }
}

render(<App />, document.getElementById('react-root'));
