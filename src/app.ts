import express, { Application, Response, Request } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'
//import usersRouter from './app/modules/users/users.route'

const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users', usersRouter)

// Test
app.get('/', async (req: Request, res: Response) => {
  res.send('Hello World')
})

export default app
