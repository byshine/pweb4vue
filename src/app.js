import styles from './sass/styles.sass';
import Vue from 'vue/dist/vue.js';
import App from './components/App.vue';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
