import GameOverScreen from '@/components/screens/GameOverScreen.vue'
import PlayScreen from '@/components/screens/PlayScreen.vue'
import SplashScreen from '@/components/screens/SplashScreen.vue'
import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', component: SplashScreen },
  { path: '/play', component: PlayScreen },
  { path: '/game-over', component: GameOverScreen },
]

const router = createRouter({
  routes,
  history: createWebHashHistory(),
})

export { router }
