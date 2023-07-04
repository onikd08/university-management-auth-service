import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyValidation } from './academicFaculty.validation';
import { AcademicFacultyController } from './academicFaculty.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(AcademicFacultyValidation.createFacultyZodSchema),
  AcademicFacultyController.createFaculty
);

//router.get('/:id');

// router.patch(
//   '/:id',
//   validateRequest(AcademicFacultyValidation.updateFacultyZodSchema)
// );

export const AcademicFacultyRoutes = router;
