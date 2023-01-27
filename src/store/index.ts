import { createStore } from 'vuex'
import loginModule from './login';
import productsModule from './products'

export default createStore<any>({
  modules: {
    products: productsModule,
    login: loginModule,
  }
})
