/* eslint-disable @typescript-eslint/consistent-type-definitions */
export interface IGenericErrorMessage {
  path: string
  message: string
}
export interface IGenericResponse {
  statusCode: number
  message: string
  errorMessages: IGenericErrorMessage[]
}
