import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/user/user.route';
import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route';
//import usersRouter from './app/modules/users/users.route'

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);

// Test
// app.get('/',  async(req: Request, res: Response, next: NextFunction) => {
//   Promise.reject(new Error('Unhandled Error'))
//   // next('global Error')
// })

//global error handler
app.use(globalErrorHandler);
export default app;
