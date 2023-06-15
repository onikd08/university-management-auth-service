import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import Router from './app/routes';
//import usersRouter from './app/modules/users/users.route'

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes

app.use('/api/v1/', Router);
// Test
// app.get('/',  async(req: Request, res: Response, next: NextFunction) => {
//   Promise.reject(new Error('Unhandled Error'))
//   // next('global Error')
// })

//global error handler
app.use(globalErrorHandler);
export default app;
