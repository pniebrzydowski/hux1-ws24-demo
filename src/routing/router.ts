import GameBoard from '@/components/GameBoard.vue'
import SplashScreen from '@/components/screens/SplashScreen.vue'
import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', component: SplashScreen },
  { path: '/play', component: GameBoard },
]

const router = createRouter({
  routes,
  history: createWebHashHistory(),
})

export { router }
