import { createStore } from 'vuex'
import localforage  from 'localforage'
import axios from "axios";

export default createStore({
  state: {
    user: null,
    token: null,
    contacts: null
  },
  getters: {
    user(state){
      return state.user
    }
  },
  mutations: {
    ['STORE_USER'](state, payload){
      state.user = payload
    },
    ['STORE_TOKEN'](state, payload){
      state.token = payload
    },
    ['SIGN_OUT'](state){
      state.user = null
    }
  },
  actions: {
      async signIn(store, credentials ){
        const response = await axios.post("http://localhost:8081/authenticate/login", credentials);

        if(response.status === 200){ 
          await localforage.setItem("user", response.data.user)
          store.commit('STORE_USER', response.data.user)
          store.commit('STORE_TOKEN', response.data.token)
        }
        return response
      },
      async signOut(store){
        await localforage.removeItem("user")
        store.commit('SIGN_OUT')
      },
      async loadUser(store){
        const currentUser = await localforage.getItem("user");
        store.commit('STORE_USER', currentUser)
      }
  },
  modules: {
  }
})
