// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Constants } from './utils';
import Main from './';


export const init = function (settings: Object) { // eslint-disable-line
  document.addEventListener('DOMContentLoaded', () => {
    const pluginContainer = document.createElement('div');
    pluginContainer.classList.add(Constants.CLASS_PLUGIN_CONTAINER);
    document.getElementsByTagName('body')[0].appendChild(pluginContainer);
    if (pluginContainer) {
      ReactDOM.render(<Main settings={settings} />, pluginContainer);
    } else {
      throw new Error('Error react container HTML element not found!');
    }
  });
};
