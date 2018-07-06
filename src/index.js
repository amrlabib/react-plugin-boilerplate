// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/';
import { App } from './components/';
import GlobalStyle from '../assets/styles/global.scss'; //eslint-disable-line

type PropsType = {
  settings: Object,
};

const Main = ({ settings }: PropsType) => {
  const store = createStore(
    rootReducer(settings),
    applyMiddleware(ReduxThunk),
  );
  return (
    <Provider store={store}>
      <App />
    </Provider>);
};
export default Main;

// $FlowFixMe
require('expose-loader?MyPlugin!./init.js'); //eslint-disable-line
