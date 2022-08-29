import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/rutas',
    name: 'rutas',
    component: () => import(/* webpackChunkName: "about" */ '../views/RutasView.vue')
  },
  {
    path: '/ciclismo',
    name: 'ciclismo',
    component: () => import(/* webpackChunkName: "ciclismo" */ '../views/CiclismoView.vue')
  },
  {
    path: '/difBasica',
    name: 'difBasica',
    component: () => import(/* webpackChunkName: "diBasica" */ '../views/DifBasicaView.vue')
  },
  {
    path: '/difIntermedia',
    name: 'difIntermedia',
    component: () => import(/* webpackChunkName: "difIntermedia" */ '../views/DifIntermediaView.vue')
  },
  {
    path: '/difAvanzada',
    name: 'difAvanzada',
    component: () => import(/* webpackChunkName: "difAvanzada" */ '../views/DifAvanzadaView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
