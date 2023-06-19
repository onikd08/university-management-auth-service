import mongoose from 'mongoose';
import {
  IGenericErrorMessage,
  IGenericErrorResponse,
} from '../interfaces/common';

const handleValidationError = (
  error: mongoose.Error.ValidationError
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(error.errors).map(el => {
    return {
      path: el.path,
      message: el.message,
    };
  });
  return {
    statusCode: 400,
    message: 'Validation Error',
    errorMessages: errors,
  };
};

export default handleValidationError;
