// @flow

import { combineReducers } from 'redux';
import movieReducer from './movieReducer';

const rootReducer = (settings: Object) => (
  combineReducers({
    movie: movieReducer,
    settings: () => settings,
  })
);

export default rootReducer;
