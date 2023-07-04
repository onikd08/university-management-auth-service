import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { AcademicFacultyService } from './academicFaculty.service';
import { IApiResponse } from '../../../interfaces/common';
import { IAcademicFaculty } from './academicFaculty.interface';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';

const createFaculty = catchAsync(async (req: Request, res: Response) => {
  const { ...academicFacultyData } = req.body;
  const result = await AcademicFacultyService.createFaculty(
    academicFacultyData
  );

  const responseData: IApiResponse<IAcademicFaculty> = {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Faculty created successfully',
    data: result,
  };

  sendResponse(res, responseData);
});

const getAllFaculties = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyService.getAllFaculties();

  const responseData: IApiResponse<IAcademicFaculty[]> = {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All Academic Faculties retrieved successfully',
    data: result,
  };

  sendResponse(res, responseData);
});

const getSingleFaculty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AcademicFacultyService.getSingleFaculty(id);

  const responseData: IApiResponse<IAcademicFaculty> = {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All Academic Faculties retrieved successfully',
    data: result,
  };

  sendResponse(res, responseData);
});

const updateFaculty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedData = req.body;
  const result = await AcademicFacultyService.updateFaculty(id, updatedData);

  const responseData: IApiResponse<IAcademicFaculty> = {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Faculty updated successfully',
    data: result,
  };

  sendResponse(res, responseData);
});

const deleteFaculty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AcademicFacultyService.deleteFaculty(id);

  const responseData: IApiResponse<IAcademicFaculty> = {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Faculty deleted successfully',
    data: result,
  };

  sendResponse(res, responseData);
});

export const AcademicFacultyController = {
  createFaculty,
  getAllFaculties,
  getSingleFaculty,
  updateFaculty,
  deleteFaculty,
};
