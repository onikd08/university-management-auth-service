import { Model } from 'mongoose';

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface IUser {
  id: string;
  role: string;
  password: string;
}

export type UserModel = Model<IUser, Record<string, unknown>>;
