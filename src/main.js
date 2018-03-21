// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import AiFocusUI from '../lib/index'
Vue.use(AiFocusUI)

// import Backtop from '../lib/backtop'
// Vue.component(Backtop.name, Backtop)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
