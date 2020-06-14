import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';
import Reducers from './reducers';

const enhancersDev = [ReduxThunk, ReduxLogger];
const enhancersProd = [ReduxThunk];
const store = () => {
  if (process.env.NODE_ENV === 'production') {
    return createStore(Reducers, applyMiddleware(...enhancersProd))
  }
  return createStore(Reducers, applyMiddleware(...enhancersDev))
};

ReactDOM.render(
  <Provider store={store()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
