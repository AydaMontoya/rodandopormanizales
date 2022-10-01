import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/bikeRoutes',
    name: 'bikeRoutes',
    component: () => import(/* webpackChunkName: "about" */ '../views/BikeRoutes.vue')
  },
  {
    path: '/basicDifficulty',
    name: 'basicDifficulty',
    component: () => import(/* webpackChunkName: "diBasica" */ '../views/BasicDifficulty.vue')
  },
  {
    path: '/intermediateDifficulty',
    name: 'intermediateDifficulty',
    component: () => import(/* webpackChunkName: "difIntermedia" */ '../views/IntermediateDifficulty.vue')
  },
  {
    path: '/advancedDifficulty',
    name: 'advancedDifficulty',
    component: () => import(/* webpackChunkName: "difAvanzada" */ '../views/AdvancedDifficulty.vue')
  },
  {
    path: '/colombianCycling',
    name: 'colombianCycling',
    component: () => import(/* webpackChunkName: "difAvanzada" */ '../views/ColombianCycling.vue')
  },
  {
    path: '/weather',
    name: 'weather',
    component: () => import(/* webpackChunkName: "difAvanzada" */ '../views/Weather.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "difAvanzada" */ '../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
