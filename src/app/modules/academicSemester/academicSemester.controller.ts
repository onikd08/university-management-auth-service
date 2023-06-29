import { Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import { IApiResponse } from '../../../interfaces/common';
import { IAcademicSemester } from './academicSemester.interface';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { academicSemesterFilterableFields } from './academicSemester.constant';

const createSemester = catchAsync(async (req: Request, res: Response) => {
  const { ...academicSemesterData } = req.body;
  const result = await AcademicSemesterService.createSemester(
    academicSemesterData
  );

  const responseData: IApiResponse<IAcademicSemester> = {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Semester created successfully',
    data: result,
  };

  sendResponse(res, responseData);
  //next();
});

const getAllSemesters = catchAsync(async (req: Request, res: Response) => {
  // const paginationOptions = {
  //   page: Number(req.query.page),
  //   limit: Number(req.query.limit),
  //   sortBy: req.query.sortBy,
  //   sortOrder: req.query.sortOrder,
  // };

  const filters = pick(req.query, academicSemesterFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await AcademicSemesterService.getAllSemesters(
    filters,
    paginationOptions
  );

  const responseData: IApiResponse<IAcademicSemester[]> = {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Semesters retrieved successfully! ',
    data: result.data,
    meta: result.meta,
  };

  sendResponse(res, responseData);
  //next();
});

const getSingleSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await AcademicSemesterService.getSingleSemester(id);

  const responseData: IApiResponse<IAcademicSemester> = {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Semester retrieved successfully! ',
    data: result,
  };
  sendResponse(res, responseData);
});

const updateSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await AcademicSemesterService.updateSemester(id, updatedData);
  const responseData: IApiResponse<IAcademicSemester> = {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Semester updated successfully! ',
    data: result,
  };
  sendResponse(res, responseData);
});

const deleteSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await AcademicSemesterService.deleteSemester(id);
  const responseData: IApiResponse<IAcademicSemester> = {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Semester deleted successfully! ',
    data: result,
  };
  sendResponse(res, responseData);
});

export const AcademicSemesterController = {
  createSemester,
  getAllSemesters,
  getSingleSemester,
  updateSemester,
  deleteSemester,
};
