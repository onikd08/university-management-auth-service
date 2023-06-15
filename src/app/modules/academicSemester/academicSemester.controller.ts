import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import { IApiResponse } from '../../../interfaces/common';
import { IAcademicSemester } from './academicSemester.interface';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );
    next();

    const responseData: IApiResponse<IAcademicSemester> = {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Academic Semester created successfully',
      data: result,
    };

    sendResponse(res, responseData);
  }
);

export const AcademicSemesterController = {
  createSemester,
};
