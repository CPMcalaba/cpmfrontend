import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoading: false,
    isAuthenticated: false,
    token: '',
    //user state
    user: {
      token: '',
      isAuthenticated: false
    }

  },
  mutations: {
    initializeStore(state){
      if(localStorage.getItem('token')){
        state.user.token = localStorage.getItem('token')
        state.user.isAuthenticated = true
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true
      } else {
        state.user.token = ''
        state.user.isAuthenticated = false
        state.token = ''
        state.isAuthenticated = false
      }
    },

    setIsLoading(state, status){
      state.isLoading = status
    },

    setToken(state, token){
      state.user.token = token
      state.user.isAuthenticated = true
      state.token = token
      state.isAuthenticated = true
    },

    removeToken(state){
      state.user.token = ''
      state.user.isAuthenticated = false
      state.token = ''
      state.isAuthenticated = false
    },
    

  },
  actions: {
  },
  modules: {
  }
})
