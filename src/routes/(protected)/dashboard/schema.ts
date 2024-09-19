import { z } from 'zod';

export const exampleSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	tags: z
		.object({
			id: z.number().int().min(1),
			name: z.string().min(2)
		})
		.array()
});

export type ExampleSchema = typeof exampleSchema;
