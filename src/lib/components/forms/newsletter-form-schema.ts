import { z } from 'zod';

export const formSchema = z.object({
	email: z.string().email({
		message: 'Enter a valid email.'
	})
});

export type FormSchema = typeof formSchema;
