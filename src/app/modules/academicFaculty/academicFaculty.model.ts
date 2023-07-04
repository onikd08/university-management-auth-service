import { Schema, model } from 'mongoose';
import {
  IAcademicFaculty,
  academicFacultyModel,
} from './academicFaculty.interface';

const academicFacultySchema = new Schema<
  IAcademicFaculty,
  academicFacultyModel
>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    // to show the value of _id in id field
    toJSON: {
      virtuals: true,
    },
  }
);

export const AcademicFaculty = model<IAcademicFaculty, academicFacultyModel>(
  'AcademicFaculty',
  academicFacultySchema
);
