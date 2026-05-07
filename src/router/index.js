import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Transactions from '../views/Transactions.vue'
import AddTransaction from '../views/AddTransaction.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login',    name: 'login',    component: Login,          meta: { guest: true } },
    { path: '/register', name: 'register', component: Register,       meta: { guest: true } },
    { path: '/',         name: 'dashboard',    component: Dashboard,      meta: { requiresAuth: true } },
    { path: '/transactions', name: 'transactions', component: Transactions, meta: { requiresAuth: true } },
    { path: '/add',      name: 'add',      component: AddTransaction, meta: { requiresAuth: true } },
  ]
})

// 네비게이션 가드
router.beforeEach((to) => {
  const token = localStorage.getItem('mb_token')
  const isLoggedIn = !!token

  if (to.meta.requiresAuth && !isLoggedIn) {
    return { name: 'login' }
  }
  if (to.meta.guest && isLoggedIn) {
    return { name: 'dashboard' }
  }
})

export default router
