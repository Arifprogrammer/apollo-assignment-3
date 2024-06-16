import { Router } from 'express'
import { authRouter } from '../modules/auth/auth.routes'
import { roomRouter } from '../modules/room/room.routes'

export const router = Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: authRouter,
  },
  {
    path: '/rooms',
    route: roomRouter,
  },
]

// biome-ignore lint/complexity/noForEach: <explanation>
moduleRoutes.forEach(route => router.use(route.path, route.route))
