import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyB8sIom4Dyd0VW_4NEamweD0-DN6Az94sk",
  authDomain: "vue-raven-auth-demo-8d4d1.firebaseapp.com",
  projectId: "vue-raven-auth-demo-8d4d1",
  storageBucket: "vue-raven-auth-demo-8d4d1.appspot.com",
  messagingSenderId: "691369536813",
  appId: "1:691369536813:web:4070095a0560838a97b7a4"
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
