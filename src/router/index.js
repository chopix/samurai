import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage'
import MainBasket from '@/pages/MainBasket'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/basket',
    name: 'MyBasket',
    component: MainBasket,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
