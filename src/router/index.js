import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FoodDetails from '../views/FoodDetailsView.vue'
import Pricing from '../views/PricingView.vue'
import Contact from '../views/ContactView.vue'
import signup from '../views/SignupView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/FoodDetails/:id',
      name: 'FoodDetails',
      component: () => import('../views/FoodDetailsView.vue'),
      props: true
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: () => import('../views/PricingView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
     {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    }
  ]
})

export default router
