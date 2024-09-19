// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		namespace Superforms {
			type Message = {
				status: 'error' | 'success' | 'warning';
				text: string;
			};
		}
	}
}

export { App };
