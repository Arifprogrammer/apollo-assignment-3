import { Router } from 'express'
import { validateBody } from '../../middlewares/validate-zod.middleware'
import { createUser } from './auth.controller'
import { userCreateValidationSchema } from './auth.validation'

const router = Router()

router.post('/signup', validateBody(userCreateValidationSchema), createUser)

export const authRouter = router
