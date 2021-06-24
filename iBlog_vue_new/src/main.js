/* eslint-disable no-new */
import Element from 'element-ui'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import FastClick from 'fastclick'
// import './plugins/element.js'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
// import router from './router/index.js'

// 注册两个插件

Vue.use(VueRouter)

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

FastClick.attach(window.document.body)
// 路由map
const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/home',
    component: function (resolve) {
      require(['./components/Home'], resolve)
    }
  },
  {
    path: '/about',
    component: function (resolve) {
      require(['./components/About'], resolve)
    }
  },
  {
    path: '/tags',
    component: function (resolve) {
      require(['./components/Tags'], resolve)
    }
  },
  {
    path: '/article/:id',
    name: 'article',
    component: function (resolve) {
      require(['./components/Article'], resolve)
    }
  },
  {
    // path: '/login/:usernemr/:message',
    path: '/login',
    name: 'login',
    component: function (resolve) {
      require(['./components/Login'], resolve)
    }
  }
]
// router.map({
//   '/home': {
//     component: function (resolve) {
//       require(['./components/Home'], resolve)
//     }
//   },
//   '/about': {
//     component: function (resolve) {
//       require(['./components/About'], resolve)
//     }
//   },
//   '/tags': {
//     component: function (resolve) {
//       require(['./components/Tags'], resolve)
//     }
//   },
//   '/article/:id': {
//     name: 'article',
//     component: function (resolve) {
//       require(['./components/Article'], resolve)
//     }
//   },
//   '/login': {
//     name: 'login',
//     component: function (resolve) {
//       require(['./components/Login'], resolve)
//     }
//   }
// })
const router = new VueRouter({
  history: true,
  hashbang: false,
  routes
})
// router.redirect({
//   '*': '/home'
// })
// var App = Vue.extend({})
// router.start(App, '#app')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// new Vue({
//   el: '#app'
//   // render: h => h(App)
// })
