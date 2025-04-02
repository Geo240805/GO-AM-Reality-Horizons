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
      component: () => import(/* webpackChunkName: "registro" */ '../views/RegistroView.vue'),
    },
    {
      path: '/dispositivos',
      name: 'dispositivos',
      component: () =>
        import(/* webpackChunkName: "dispositivos" */ '../views/DispositivosView.vue'),
    },
    {
      path: '/realidad-aumentada',
      name: 'realidad-aumentada',
      component: () =>
        import(/* webpackChunkName: "realidad-aumentada" */ '../views/RealidadAumentadaView.vue'),
    },
    {
      path: '/entrada',
      name: 'entrada',
      component: () => import(/* webpackChunkName: "entrada" */ '../views/EntradaView.vue'),
    },
    {
      path: '/biblioteca',
      name: 'biblioteca',
      component: () => import(/* webpackChunkName: "biblioteca" */ '../views/BibliotecaView.vue'),
    },
    {
      path: '/biblioteca/dentro',
      name: 'dentro-biblioteca',
      component: () =>
        import(/* webpackChunkName: "dentro-biblioteca" */ '../views/DentroBibliotecaView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue'),
      meta: { requiresAuth: false },
    },
  ],
})

export default router
