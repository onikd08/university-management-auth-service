import { IAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartment } from './academicDepartment.model';

const getAllDepartments = async (): Promise<IAcademicDepartment[]> => {
  const result = await AcademicDepartment.find({}).populate('academicFaculty');
  return result;
};

const createDepartment = async (
  payload: IAcademicDepartment
): Promise<IAcademicDepartment> => {
  const result = (await AcademicDepartment.create(payload)).populate(
    'academicFaculty'
  );
  return result;
};

const getSingleDepartment = async (
  id: string
): Promise<IAcademicDepartment | null> => {
  const result = await AcademicDepartment.findById(id).populate(
    'academicFaculty'
  );
  return result;
};

const deleteDepartment = async (
  id: string
): Promise<IAcademicDepartment | null> => {
  const result = await AcademicDepartment.findByIdAndDelete(id);
  return result;
};

const updateDepartment = async (
  id: string,
  payload: Partial<IAcademicDepartment>
) => {
  const result = await AcademicDepartment.findOneAndUpdate(
    { _id: id },
    payload,
    { new: true }
  ).populate('academicFaculty');
  console.log(result);
  return result;
};

export const AcademicDepartmentService = {
  getAllDepartments,
  createDepartment,
  getSingleDepartment,
  deleteDepartment,
  updateDepartment,
};