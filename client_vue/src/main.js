import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 注册两个插件
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.http.options.emulateJSON = true

const router = new VueRouter({
  history: true,
  hashbang: false
})

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

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

router.start(App, '#app')
