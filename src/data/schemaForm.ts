import * as z from 'zod';
import { error } from './userMessage';

export const schemaForm = z.object({
  name: z.string().min(2, { message: error.required }),
  email: z.string()
    .email({ message: error.email })
    .min(1, { message: error.required }),
  message: z.string().min(2, { message: error.required }),
});
