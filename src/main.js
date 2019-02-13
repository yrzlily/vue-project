// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import toast from 'vue2-toast'
import 'vue2-toast/lib/toast.css';
import http from '@/util/http'

Vue.config.productionTip = false
Vue.use(http);
Vue.use(toast);
Vue.prototype.http = http;
Vue.prototype.token = localStorage.getItem('token');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app');
