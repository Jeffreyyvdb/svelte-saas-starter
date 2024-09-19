import { type Infer, setError, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { message } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';
import type { App } from '../../../app.d.ts';
import { exampleSchema } from './schema';
type Message = App.Superforms.Message;

export const load = async () => {
	const tags = [
		{ id: 1, name: 'tag1' },
		{ id: 2, name: 'tag2' }
	];

	const form = await superValidate({ tags }, zod(exampleSchema), { errors: false });

	// Always return { form } in load functions
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate<Infer<typeof exampleSchema>, Message>(
			request,
			zod(exampleSchema)
		);
		console.log(form);
		console.log(form.data.tags);

		if (!form.valid) {
			// Again, return { form } and things will just work.
			return fail(400, { form });
		}

		if (form.data.email === 'admin@gmail.com') {
			setError(form, 'email', 'Email already exists');
			return message(form, { status: 'error', text: 'Email already exists' }, { status: 400 });
		}

		// Display a success status message
		return message(form, { status: 'success', text: 'Form posted successfully!' });
	}
};
