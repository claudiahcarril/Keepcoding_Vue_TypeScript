import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'list-products',
    component: () => import(/* webpackChunkName: "list-products" */ '../views/ListProductsView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/ProfileView.vue')
  },
  {
    path: '/:id',
    name: 'detail-product',
    component: () => import(/* webpackChunkName: "detail-product" */ '../views/ProductDetailView.vue'),
    props: (route) => {
      const id = Number(route.params.id)
      const detailProduct = localStorage.getItem('detailProduct')
      return isNaN(id) ? {id: null, detailProduct} : { id, detailProduct }
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
