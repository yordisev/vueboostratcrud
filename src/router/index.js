import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Inicio',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue')
  },
  {
    path: '/Usuarios',
    name: 'Usuarios',
    component: () => import(/* webpackChunkName: "about" */ '../views/Usuarios.vue')
  },
  {
    path: '/Empleados',
    name: 'Empleados',
    component: () => import(/* webpackChunkName: "about" */ '../views/Empleados.vue')
  },
  {
    path: '/CrearEmpleado',
    name: 'CrearEmpleado',
    component: () => import(/* webpackChunkName: "about" */ '../components/CrearEmpleado.vue')
  },
  {
    path: '/EditarEmpleado',
    name: 'EditarEmpleado',
    component: () => import(/* webpackChunkName: "about" */ '../components/EditarEmpleado.vue')
  },
  {
    path: '/Informes',
    name: 'Informes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Informes.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
