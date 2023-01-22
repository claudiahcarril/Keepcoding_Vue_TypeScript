import { Product } from '@/models/product'
import { createStore } from 'vuex'
import productsModule from './products'


export interface IState {
  authProduct: Product | null,
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
  }
})
