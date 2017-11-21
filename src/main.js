// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'

import vuexi18n from 'vuex-i18n'

Vue.use(vuexi18n.plugin, store)

const translationsFr = {
  "Answer": "Répondre",
  "Subtraction": "Soustraction",
}

Vue.i18n.add('fr', translationsFr);
Vue.i18n.set('fr');

require('./assets/sass/main.scss');

window._ = require('lodash');

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
