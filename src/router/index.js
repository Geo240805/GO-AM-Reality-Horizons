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
      path: '/registro',
      name: 'registro',
      component: () => import('../views/RegistroView.vue'),
    },
    {
      path: '/dispositivos',
      name: 'dispositivos',
      component: () => import('../views/DispositivosCompatiblesView.vue'),
    },
    {
      path: '/realidad-aumentada',
      name: 'realidad-aumentada',
      component: () => import('../views/RealidadAumentadaView.vue'),
    },
    {
      path: '/entrada',
      name: 'entrada',
      component: () => import('../views/EntradaView.vue'),
    },
    {
      path: '/biblioteca',
      name: 'biblioteca',
      component: () => import('../views/BibliotecaView.vue'),
    },
    {
      path: '/dentroBiblioteca',
      name: 'dentroBiblioteca',
      component: () => import('../views/DentroBibliotecaView.vue'),
    },
  ],
})

export default router
