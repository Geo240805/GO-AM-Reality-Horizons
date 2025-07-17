import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/realidad-aumentada',
      name: 'realidad-aumentada',
      component: () => import('../views/RealidadAumentadaView.vue'),
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const el = document.querySelector(to.hash)
          if (el) {
            const y = el.getBoundingClientRect().top + window.pageYOffset - 72
            window.scrollTo({ top: y, behavior: 'smooth' })
          }
          resolve(false)
        }, 100)
      })
    }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
