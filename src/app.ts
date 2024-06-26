import express, { Application } from 'express'
import cors from 'cors'
import { globalErrorHandler } from './app/middlewares/global-error-handler.middleware'
import { notFound } from './app/middlewares/not-found.middleware'
import { router } from './app/routes'

const app: Application = express()

//* middlewares
app.use(express.json())
app.use(cors())

//* routes
app.use('/api', router)
//* root response
app.get('/', (req, res) => {
  res.send('Welcome to the Meeting Room Booking System!')
})

//* middlewares
app.use(globalErrorHandler)
//* not-found-route
app.use(notFound)

export default app
