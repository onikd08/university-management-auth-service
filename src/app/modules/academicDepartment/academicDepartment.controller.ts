import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { AcademicDepartmentService } from './academicDepartment.service';
import { IApiResponse } from '../../../interfaces/common';
import { IAcademicDepartment } from './academicDepartment.interface';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import pick from '../../../shared/pick';
import { academicDepartmentFilterableFields } from './academicDepartment.constants';
import { paginationFields } from '../../../constants/pagination';

const createDepartment = catchAsync(async (req: Request, res: Response) => {
  const { ...academicDepartmentData } = req.body;
  const result = await AcademicDepartmentService.createDepartment(
    academicDepartmentData
  );

  const responseData: IApiResponse<IAcademicDepartment> = {
    success: true,
    message: 'Academic Department created successfully',
    statusCode: httpStatus.OK,
    data: result,
  };
  sendResponse(res, responseData);
});

const getAllDepartments = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicDepartmentFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await AcademicDepartmentService.getAllDepartments(
    filters,
    paginationOptions
  );

  const responseData: IApiResponse<IAcademicDepartment[]> = {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Departments retrieved successfully',
    data: result.data,
    meta: result.meta,
  };
  sendResponse(res, responseData);
});

const getSingleDepartment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AcademicDepartmentService.getSingleDepartment(id);

  const responseData: IApiResponse<IAcademicDepartment> = {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Department retrieved successfully',
    data: result,
  };
  sendResponse(res, responseData);
});

const updateDepartment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedData = req.body;
  const result = await AcademicDepartmentService.updateDepartment(
    id,
    updatedData
  );

  const responseData: IApiResponse<IAcademicDepartment> = {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Department updated successfully',
    data: result,
  };

  sendResponse(res, responseData);
});

const deleteDepartment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AcademicDepartmentService.deleteDepartment(id);

  const responseData: IApiResponse<IAcademicDepartment> = {
    statusCode: httpStatus.OK,
    message: 'Academic Department deleted successfully',
    data: result,
    success: true,
  };

  sendResponse(res, responseData);
});

export const AcademicDepartmentController = {
  createDepartment,
  getAllDepartments,
  getSingleDepartment,
  updateDepartment,
  deleteDepartment,
};
