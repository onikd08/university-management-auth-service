import express, { Application } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/user/user.route'
//import usersRouter from './app/modules/users/users.route'

const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users', UserRoutes)

// Test
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('api error')
//   // next('global Error')
// })

//global error handler
app.use(globalErrorHandler)
export default app
