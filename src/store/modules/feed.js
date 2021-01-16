import feedApi from '@/api/feed'

const state = {
  data: null,
  isLoading: false,
  errors: null,
}

export const mutationTypes = {
  getFeedStart: '[feed] getFeedStart',
  getFeedSuccess: '[feed] getFeedSuccess',
  getFeedFailure: '[feed] getFeedFailure',
}

export const actionTypes = {
  getFeed: '[feed] getFeed',
}

const mutations = {
  [mutationTypes.getFeedStart](state) {
    state.isLoading = true
    state.data = null
  },
  [mutationTypes.getFeedSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },
  [mutationTypes.getFeedFailure](state) {
    state.isLoading = false
  },
}

const actions = {
  [actionTypes.getFeed](context, { apiUrl }) {
    context.commit(mutationTypes.getFeedStart)
    return new Promise(resolve => {
      feedApi
        .getFeed(apiUrl)
        .then(response => {
          context.commit(mutationTypes.getFeedSuccess, response.data)
          resolve(response.data)
        })
        .catch(() => {
          context.commit(mutationTypes.getFeedFailure)
        })
    })
  },
}

export default {
  state,
  mutations,
  actions,
  // getters,
}
