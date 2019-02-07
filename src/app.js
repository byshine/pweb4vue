import styles from './sass/styles.sass';
import Vue from 'vue';
import App from './components/App.vue';
import store from './store';
import router from './router';

Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
