import { REQUEST_REGISTER, GET_REGISTER, GET_REGISTER_FAILURE } from '../mutation-types'

const state = {
  isregFetching: false,
  regcode: '',
  regmessage: ''
}

const mutations = {
  [REQUEST_REGISTER] (state) {
    state.isregFetching = true
  },
  [GET_REGISTER] (state, items) {
    state.isregFetching = false
    state.regcode = items.code
    state.regmassage = items.message
    console.log(state.code)
  },
  [GET_REGISTER_FAILURE] (state) {
    state.isregFetching = false
  }
}

export default {
  // namespace: true,
  state,
  mutations
}
