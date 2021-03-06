import Vue from 'vue'
import Vuex from 'vuex'
import contentList from './modules/contentList'
import headline from './modules/headline'
import article from './modules/article'
import tags from './modules/tags'
import tagContentList from './modules/tagContentList'
import login from './modules/login'
import register from './modules/register'
import actions from './actions'
import getters from './getters'

// import mutations from './mutations'
// import state from './state'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  modules: {
    contentList,
    headline,
    article,
    tags,
    tagContentList,
    login,
    register
  },
  actions,
  getters
})
