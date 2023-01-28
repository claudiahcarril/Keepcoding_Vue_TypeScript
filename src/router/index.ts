import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import haveRoleGuard from './role-guards'
// import haveRoleGuard from './role-guards'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'list-products',
    beforeEnter: [haveRoleGuard],
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
    beforeEnter: [haveRoleGuard],
    component: () => import(/* webpackChunkName: "profile" */ '../views/ProfileView.vue')
  },
  {
    path: '/detail-product/:id',
    name: 'detail-product',
    beforeEnter: [haveRoleGuard],
    component: () => import(/* webpackChunkName: "detail-product" */ '../views/ProductDetailView.vue'),
    props: (route) => {
      const id = Number(route.params.id)
      const userRole = localStorage.getItem('userRole')
      return isNaN(id) ? {id: null, userRole} : { id, userRole }
    },
  },
  {
    path: "/:pathMatch(.*)",
    beforeEnter: [haveRoleGuard],
    component: import(/*webpackChunkName: notFound*/ "../views/NotFound.vue"),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
