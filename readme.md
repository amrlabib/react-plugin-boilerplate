# React plugin boilerplate

React plugin boilerplate is to help you build a powerful plugin with all react power in few seconds.

## Prerequisite:

* [yarn](https://yarnpkg.com/en/) or [npm](https://www.npmjs.com/)
* [Node.js](https://nodejs.org/en/)

---

## Setup:

1. `yarn` or `npm install`
2. `yarn start:dev` to build and watch for changes, also a dev server will start on `http://localhost:3000/`

#### Other scripts:
1. `yarn json-server` to create test json api `http://localhost:3001/`
2. `yarn lint` to run eslint on `src` folder and display code errors if any
3. `yarn flow` to run flow

---

## How it works:

The goal is to bundle all your code and assets including [images, svgs, and styles] in a single file that can be hosted and then included in any web page, in the following way

```
<script type="text/javascript" src="./js/scripts.js"></script>
<script>MyPlugin.init({ title: 'My Plugin Title' });</script>
```

### Svgs:
all svgs will be embedded as inline svg in the plugin

* Add your svg in [`/src/assets/icons/`](/src/assets/icons)
* Include it in  [`/src/utils/svgs.js`](/src/utils/svgs.js)
* Finally include svg in your component as in [`/src/components/Header`](/src/components/Header/index.js)

### Images:
images will be converted to base64 and embedded in the bundled `scripts.js` file, note that the max image size is set to 50kb ideally you should not be using big size images in a plugin.

* Add your image in [`/src/assets/images/`](/src/assets/images)
* Reference your image in style and it will be converted to base64 as in [`src/components/Header/`](src/components/Header/header.scss)

### Styles:
all styles will be embedded in bundled `scripts.js`

### Settings:
You can pass any settings while initializing the plugin, and all your settings will be copied to redux store and can be accessed from all components the same way we used `title` settings in [`src/components/Header/`](/src/components/Header/index.js)

---

## Features:

1. [ES6 Features](http://es6-features.org/#Constants)
2. [React Redux](https://github.com/reactjs/react-redux) to maintain application state
3. [Redux Thunk](https://github.com/gaearon/redux-thunk) to handle asynchronous actions
4. [axios](https://github.com/axios/axios) to handle all api calls `['GET','POST','PUT','DELETE', ...]`
5. [React CSS Modules](https://github.com/gajus/react-css-modules) to be able to build modular CSS code for each React component.
6. [Svgo](https://github.com/svg/svgo) to make sure all your svg icons are optimized
7. [Node express based](https://expressjs.com/) development server
8. [json-server](https://github.com/typicode/json-server) no need to wait for backend api to start development, use `json-server` to have test data and test api ready for use
9. [eslint](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) the project contains eslint with `eslint-config-airbnb` extended, to fix and flag javascript code errors.
10. [flow](https://flow.org/en/) static type checker for javascript
11. [husky](https://github.com/typicode/husky) to add `pre-commit` hook that will trigger `yarn lint && yarn flow` to make sure no bad commits are pushed

---

## Bundling/Build using Webpack:

Webpack is the only tool used in this plugin to build the final `scripts.js` file

#### Loaders:
1. [babel-loader](https://github.com/babel/babel-loader) with `['es2015', 'react', 'stage-1', 'flow']` presets for ES6 features and React JSX transpilation to ES5 understood by all browsers.
2. [sass-loader](https://github.com/webpack-contrib/sass-loader) Loads a Sass/SCSS file and compiles it to CSS
3. [css-loader](https://github.com/webpack-contrib/css-loader) interprets `@import`/`url()` to js modules
4. [postcss-loader](https://github.com/postcss/postcss-loader) to process CSS with [PostCSS](http://postcss.org/)
5. [style-loader](https://github.com/webpack-contrib/style-loader)
6. [file-loader](https://github.com/webpack-contrib/file-loader) interprets `@import`/`url()` to image files, to copy them to `dist` folder and return url for these images
7. [svgo-loader](https://github.com/rpominov/svgo-loader) to optimize svg before generating final sprite.svg

#### Plugins:
1. [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) for javascript minification
2. [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin) used to copy `index.html` to `dist` folder
3. [compression-webpack-plugin](https://github.com/webpack-contrib/compression-webpack-plugin) for gzip compression of scripts.js

---

## Editor recommendation:

You can use any prefered editor, in case you are using [Atom](https://atom.io/) the following packages can help speed up your development process:

* [react](https://atom.io/packages/react)
* [linter-eslint](https://atom.io/packages/linter-eslint)
* [flow-ide](https://atom.io/packages/flow-ide)
