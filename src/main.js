import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import firebase from './firebase/init'

Vue.use(BootstrapVue);

Vue.config.productionTip = false
Vue.prototype.$email = ''

// to jest po to że jak sie jest zalogowany i sie odswiezy to dalej sie jest zalogowany
let app;
firebase.auth.onAuthStateChanged(() => {
  if(!app){
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})

