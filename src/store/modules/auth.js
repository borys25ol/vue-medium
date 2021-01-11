import authApi from '@/api/auth'

const state = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  IsLoggedIn: null,
}

const mutations = {
  registerStart(state) {
    state.isSubmitting = true
    state.validationErrors = null
  },
  registerSuccess(state, payload) {
    state.isSubmitting = false
    state.currentUser = payload
    state.IsLoggedIn = true
  },
  registerFailure(state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },
}

const actions = {
  register(context, credentials) {
    context.commit('registerStart')
    return new Promise(resolve => {
      authApi
        .register(credentials)
        .then(response => {
          context.commit('registerSuccess', response.data.user)
          resolve(response.data.user)
        })
        .catch(result => {
          context.commit('registerFailure', result.response.data.errors)
        })
    })
  },
}

export default {
  state,
  mutations,
  actions,
  modules: {},
}
