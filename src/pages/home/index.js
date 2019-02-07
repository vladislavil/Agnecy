import Vue from 'vue';
import AppVue from './App.vue';
import AppReact from './App.jsx';

import './index.sass';
import './index.pug';
import './services'
import Products from './products'
import './team'
import './subscribe'
import './feedback'

import './test-scss.scss';

export default () => {

  console.log("initProducts");
  Products();
};
