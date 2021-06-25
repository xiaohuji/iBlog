import * as types from './mutation-types'
import { API_ROOT } from '../config'
import axios from 'axios'
axios.defaults.withCredentials = true

const actions = {
  // 登录
  getLogin ({ commit }, userdata) {
    commit(types.REQUEST_LOGIN)
    axios.post(API_ROOT + 'api/user/login/', userdata)
      .then(response => {
        console.log(response.data)
        // dispatch(types.GET_CONTENT_LIST, response.data)
        commit(types.GET_LOGIN, response.data)
      }, error => {
        commit(types.GET_LOGIN_FAILURE, error)
      })
  },
  // 注册
  getRegister ({ commit }, userdata) {
    commit(types.REQUEST_REGISTER)
    axios.post(API_ROOT + 'api/user/register/', userdata)
      .then(response => {
        console.log(response.data)
        // dispatch(types.GET_CONTENT_LIST, response.data)
        commit(types.GET_REGISTER, response.data)
      }, error => {
        commit(types.GET_REGISTER_FAILURE, error)
      })
  },
  // 获取内容
  getContentList ({ commit }) {
    commit(types.REQUEST_CONTENT_LIST)
    axios.get(API_ROOT + 'api/content-list')
      .then(response => {
        console.log(response.data)
        // dispatch(types.GET_CONTENT_LIST, response.data)
        commit(types.GET_CONTENT_LIST, response.data)
      }, error => {
        commit(types.GET_CONTENT_LIST_FAILURE, error)
      })
  },
  //  获取标题, 更新标题
  getHeadline ({ commit }) {
    commit(types.GET_HEADLINE)
  },
  updateHeadline ({ commit }, value) {
    commit(types.UPDATE_HEADLINE, value)
  },
  //  获取文章内容, 清除文章
  getArticle ({ commit }, id) {
    axios.get(API_ROOT + 'api/article/' + id).then(response => {
      console.log('aarticle')
      console.log(response.data)
      commit(types.GET_ARTICLE, response.data)
    }, error => {
      commit(types.GET_ARTICLE_FAILURE, error)
    })
  },
  clearArticle ({ commit }) {
    commit(types.CLEAR_ARTICLE)
  },
  // 获取标签集, 获取指定标签列表
  getTags ({ commit }) {
    axios.get(API_ROOT + 'api/tags').then(response => {
      commit(types.GET_TAGS, response.data)
    }, error => {
      commit(types.GET_TAGS_FAILURE, error)
    })
  },
  getTagContentList ({ commit }, tagId) {
    axios.get(API_ROOT + 'api/tags/' + tagId).then(response => {
      console.log(response.data)
      commit(types.GET_TAG_CONTENT_LIST, response.data, tagId)
    }, error => {
      commit(types.GET_TAG_CONTENT_LIST_FAILURE, error)
    })
  },
  // 根据 文章 id 获取 comments
  getCommentsList ({ commit }, articleId) {
    axios.get(API_ROOT + 'api/comments/' + articleId).then(response => {
      commit(types.GET_COMMENTS_LIST, response.data)
    }, error => {
      commit(types.GET_COMMENTS_LIST_FAILURE, error)
    })
  },
  // 提交评论
  submitComment ({ commit }, data) {
    axios.post(API_ROOT + 'api/comments/submitComment', data).then(response => {
      commit(types.SUBMIT_COMMENT, response.data)
    }, error => {
      commit(types.SUBMIT_COMMENT_FAILURE, error)
    })
  }
}

export default actions
