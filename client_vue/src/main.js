/* eslint-disable no-new */
import Element from 'element-ui'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
// import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
// import router from './router/index.js'

// new Vue({
//   // el: '#app',
//   // router,
//   // store,
//   components: { App },
//   template: '<App/>',
//   render: h => h(App)
// }).$mount('#app')
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>',
//   render: h => h(App)
// })

// 注册两个插件

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.http.options.emulateJSON = true

// new Vue({
  // el: '#app'
  // router,
  // store,
  // components: { App },
  // template: '<App/>'
  // render: h => h(App)
// })
// new Vue({
//   el: 'body'
//   // store,
// })
// var App = Vue.extend({});

const router = new VueRouter({
  history: true,
  hashbang: false
})

FastClick.attach(window.document.body)
// 路由map
router.map({
  '/home': {
    component: function (resolve) {
      require(['./components/Home'], resolve)
    }
  },
  '/about': {
    component: function (resolve) {
      require(['./components/About'], resolve)
    }
  },
  '/tags': {
    component: function (resolve) {
      require(['./components/Tags'], resolve)
    }
  },
  '/article/:id': {
    name: 'article',
    component: function (resolve) {
      require(['./components/Article'], resolve)
    }
  },
  '/login': {
    name: 'login',
    component: function (resolve) {
      require(['./components/Login'], resolve)
    }
  }

})

router.redirect({
  '*': '/home'
})
// var App = Vue.extend({})
router.start(App, '#app')

// new Vue({
//   router,
//   // store,
//   render: h => h(App)
// }).$mount('#app')
new Vue({
  el: '#app'
  // render: h => h(App)
})
