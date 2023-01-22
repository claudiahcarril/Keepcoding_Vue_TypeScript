import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import haveRoleGuard from './role-guards'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'list-products',
    // beforeEnter: [haveRoleGuard],
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
      const userRole = localStorage.getItem('userRole')
      return isNaN(id) ? {id: null, userRole} : { id, userRole }
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
