import { Router } from 'express'
import { validateBody } from '../../middlewares/validate-zod.middleware'
import { createUser, loginUser } from './auth.controller'
import {
  userCreateValidationSchema,
  userLoginValidationSchema,
} from './auth.validation'
import { authenticateToken } from '../../middlewares/authenticateToken.middleware'

const router = Router()

router.post('/signup', validateBody(userCreateValidationSchema), createUser)
router.post('/login', validateBody(userLoginValidationSchema), loginUser)
router.get('/token', authenticateToken('user'))

export const authRouter = router
