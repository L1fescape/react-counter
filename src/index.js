import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Counter from './components/counter';
import reducers from './reducers';

let store = createStore(
  reducers
);

const root = document.getElementById('app');

ReactDom.render(
  <Provider store={store}>
    <Counter />
  </Provider>
, root);
