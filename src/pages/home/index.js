import Vue from 'vue';
import AppVue from './App.vue';
import AppReact from './App.jsx';

import './index.sass';
import './index.pug';
import './services'
import initProducts from './products'
import './team'
import './subscribe'
import './feedback'

import './test-scss.scss';
export default function () {

  initProducts();
  console.log(tmpPug());

  new Vue({
    el: '#test-vue',
    render: createElem => createElem(AppVue),
  });

  AppReact();
};
