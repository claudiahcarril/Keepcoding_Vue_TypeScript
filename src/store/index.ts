import { User } from '@/models/user';
import { createStore } from 'vuex'
// import loginModule from './login';
import productsModule from './products'

export interface ProfileState {
  user?: User;
  error: boolean;
}


export default createStore({
  state: {
    authProduct: null
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products: productsModule,
    // login: loginModule,
  }
})
