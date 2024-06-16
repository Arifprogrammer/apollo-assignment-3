import { Router } from 'express'
import { authRouter } from '../modules/auth/auth.routes'
import { roomRouter } from '../modules/room/room.routes'
import { slotRouter } from '../modules/slot/slot.routes'

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
  {
    path: '/slots',
    route: slotRouter,
  },
]

// biome-ignore lint/complexity/noForEach: <explanation>
moduleRoutes.forEach(route => router.use(route.path, route.route))
