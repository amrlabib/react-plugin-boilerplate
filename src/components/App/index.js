// @flow

import React from 'react';
import CSSModules from 'react-css-modules';
import { Header, Movies } from '../';
import style from './app.scss';


const App = () => (
  <div>
    <Header />
    <Movies />
  </div>
);


const cssModuleComponet = CSSModules(App, style);
export default cssModuleComponet;
