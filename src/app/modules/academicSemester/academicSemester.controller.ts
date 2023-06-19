import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import { IApiResponse } from '../../../interfaces/common';
import { IAcademicSemester } from './academicSemester.interface';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );

    const responseData: IApiResponse<IAcademicSemester> = {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Academic Semester created successfully',
      data: result,
      meta: {
        page: 1,
        limit: 1,
        total: 1,
      },
    };

    sendResponse(res, responseData);
    next();
  }
);

const getAllSemesters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // const paginationOptions = {
    //   page: Number(req.query.page),
    //   limit: Number(req.query.limit),
    //   sortBy: req.query.sortBy,
    //   sortOrder: req.query.sortOrder,
    // };

    const paginationOptions = pick(req.query, paginationFields);

    const result = await AcademicSemesterService.getAllSemesters(
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
    next();
  }
);

export const AcademicSemesterController = {
  createSemester,
  getAllSemesters,
};
