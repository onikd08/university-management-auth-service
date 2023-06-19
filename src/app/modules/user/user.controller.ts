import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { IApiResponse } from '../../../interfaces/common';
import { IUser } from './user.interface';

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body;
    const result = await UserService.createUser(user);

    const responseData: IApiResponse<IUser> = {
      success: true,
      statusCode: httpStatus.OK,
      message: 'User created successfully',
      data: result,
    };
    sendResponse(res, responseData);
    next();
  }
);

export const UsersController = {
  createUser,
};
