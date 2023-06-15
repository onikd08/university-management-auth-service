import { z } from 'zod';
import {
  academicSemesterCodes,
  academicSemesterMonths,
  academicSemesterTitles,
} from './academicSemester.constant';

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum([...academicSemesterTitles] as [string, ...string[]], {
      required_error: `Field 'title' is required`,
    }),
    year: z.number({
      required_error: `Field 'year' is required`,
    }),
    code: z.enum([...academicSemesterCodes] as [string, ...string[]], {
      required_error: `Field 'code' is required`,
    }),
    startMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: `Field 'startMonth' is required`,
    }),
    endMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: `Field 'endMonth' is required`,
    }),
  }),
});

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
};
