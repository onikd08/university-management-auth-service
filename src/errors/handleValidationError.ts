import mongoose from 'mongoose'
import { IGenericErrorMessage, IGenericResponse } from '../interfaces/common'

const handleValidationError = (
  error: mongoose.Error.ValidationError
): IGenericResponse => {
  const errors: IGenericErrorMessage[] = Object.values(error.errors).map(el => {
    return {
      path: el.path,
      message: el.message,
    }
  })
  return {
    statusCode: 400,
    message: 'Validation Error',
    errorMessages: errors,
  }
}

export default handleValidationError
