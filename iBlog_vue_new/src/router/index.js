import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
// 注册两个插件
Vue.use(VueResource)
Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     redirect: '/home'
//   },
//   {
//     path: '/home',
//     component: function (resolve) {
//             require(['./components/Home'], resolve)
//           }
//   },
//   {
//     path: '/login',
//     component: Login
//   }
// ]

const router = new VueRouter({
  routes,
  history: true,
  hashbang: false
})

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

export default router
