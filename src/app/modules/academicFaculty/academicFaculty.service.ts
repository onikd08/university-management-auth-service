import { IAcademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

const createFaculty = async (
  payload: IAcademicFaculty
): Promise<IAcademicFaculty> => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

const getAllFaculties = async (): Promise<IAcademicFaculty[]> => {
  const result = await AcademicFaculty.find({});
  return result;
};

const getSingleFaculty = async (
  id: string
): Promise<IAcademicFaculty | null> => {
  const result = await AcademicFaculty.findById(id);
  return result;
};
export const AcademicFacultyService = {
  createFaculty,
  getAllFaculties,
  getSingleFaculty,
};
