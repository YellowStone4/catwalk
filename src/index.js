/* eslint-disable no-console */
import React from 'react';
import { render } from 'react-dom';
import ProductPage from './ProductPage.jsx';

const product = {
  id: 19089,
  campus: 'hr-rfe',
  name: 'Camo Onesie',
  slogan: 'Blend in to your crowd',
  description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
  category: 'Jackets',
  default_price: '140.00',
  created_at: '2021-02-23T19:24:34.450Z',
  updated_at: '2021-02-23T19:24:34.450Z',
  features: [
    {
      feature: 'Fabric',
      value: 'Canvas',
    },
    {
      feature: 'Buttons',
      value: 'Brass',
    },
  ],
};

render(<ProductPage product={product} />, document.getElementById('react-root'));
