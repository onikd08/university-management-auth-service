/* eslint-disable @typescript-eslint/consistent-type-definitions */
export interface IGenericErrorMessage {
  path: string | number;
  message: string;
}
export interface IGenericResponse {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
}

export type IApiResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string | null;
  data: T | null;
};
