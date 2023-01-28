import { createStore } from 'vuex'
import cartModule from './cart';
import loginModule from './login';
import productsModule, { IState } from './products'


export default createStore<IState>({
  modules: {
    products: productsModule,
    login: loginModule,
    cart: cartModule
  }
})
