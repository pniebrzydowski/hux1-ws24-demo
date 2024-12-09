import GameBoard from '@/components/GameBoard.vue'
import SplashScreen from '@/components/SplashScreen.vue'
import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', component: SplashScreen },
  { path: '/play/:gameId', component: GameBoard, props: true },
]

const router = createRouter({
  routes,
  history: createWebHashHistory(),
})

export { router }
