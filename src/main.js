import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'vue-fragment';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUsers,
  faMale,
  faFemale,
  faUniversity,
  faSortNumericUpAlt,
  faLaptop,
  faPollH,
  faFileInvoiceDollar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUsers, faMale, faFemale, faUniversity, faSortNumericUpAlt, faLaptop, faPollH, faFileInvoiceDollar);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(bootstrap);
Vue.component('fragment', Fragment);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
