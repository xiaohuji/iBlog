import { REQUEST_LOGIN, GET_LOGIN, GET_LOGIN_FAILURE } from '../mutation-types'

const state = {
  isFetching: false,
  code: '',
  message: ''
}

const mutations = {
  [REQUEST_LOGIN] (state) {
    state.isFetching = true
  },
  [GET_LOGIN] (state, items) {
    state.isFetching = false
    state.code = items.code
    state.massage = items.message
    console.log(state.code)
  },
  [GET_LOGIN_FAILURE] (state) {
    state.isFetching = false
  }
}

export default {
  // namespace: true,
  state,
  mutations
}
