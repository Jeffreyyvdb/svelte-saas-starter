<script lang="ts">
	import DashboardHeader from '$lib/components/shared/dashboard-header.svelte';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import * as Form from '$lib/components/ui/form';
	import { superForm, type SuperValidated } from 'sveltekit-superforms';
	import SuperDebug from 'sveltekit-superforms';
	import { toast } from 'svelte-sonner';

	interface OpinionatedFormProps {
		class?: string;
		data: SuperValidated<any>;
		id: string;
	}

	let { data, id, class: className }: OpinionatedFormProps = $props();

	const form = superForm(data, {
		id, // Set an id to be able to have multiple forms on the same page
		dataType: 'json', // Set the data type to enable nested data
		delayMs: 500,
		timeoutMs: 8000,
		onUpdated({ form }) {
			console.log(form);
			if (form.message) {
				// Display the message using a toast library
				if (form.message.status === 'success') {
					toast.success('Form submitted successfully', { description: form.message.text });
				} else {
					toast.error('Something went wrong', { description: form.message.text });
				}
			}
		}
	});

	const { form: formData, errors, constraints, message, enhance, delayed } = form;
</script>

<form method="POST" use:enhance class={className}>
	<Form.Field {form} name="name">
		<Form.FieldErrors />
		<Form.Control let:attrs>
			<Form.Label>Name</Form.Label>
			<Input {...attrs} bind:value={$formData.name} aria-invalid={$errors.name ? 'true' : undefined}
			></Input>
		</Form.Control>
		<Form.Description>This is your public display name.</Form.Description>
	</Form.Field>
	<Form.Field {form} name="email">
		<Form.Control let:attrs>
			<Form.FieldErrors />
			<Form.Label>Email</Form.Label>
			<Input
				{...attrs}
				bind:value={$formData.email}
				aria-invalid={$errors.email ? 'true' : undefined}
			></Input>
		</Form.Control>
		<Form.Description>This is your email address.</Form.Description>
	</Form.Field>

	<div>
		<div class="grid grid-cols-2 gap-4">
			<div>Id</div>
			<div>Name</div>
		</div>
		{#each $formData.tags as _, i}
			<Form.Field {form} name="tags">
				<Form.Control let:attrs>
					<Form.FieldErrors />
					<div class="grid grid-cols-3 gap-4">
						<Form.Field {form} name="tags[{i}].id">
							<Form.Control let:attrs>
								<Form.FieldErrors />
								<Input {...attrs} bind:value={$formData.tags[i].id} type="number"></Input>
							</Form.Control>
						</Form.Field>

						<Form.Field {form} name="tags[{i}].name">
							<Form.Control let:attrs>
								<Form.FieldErrors />
								<Input {...attrs} bind:value={$formData.tags[i].name}></Input>
							</Form.Control>
						</Form.Field>

						<Button
							class="mt-2"
							variant="destructive"
							on:click={() => {
								$formData.tags = $formData.tags.filter((x: any) => x !== $formData.tags[i]);
							}}>Delete</Button
						>
					</div>
				</Form.Control>
			</Form.Field>
		{/each}
		<Button
			class="mt-2"
			on:click={() => {
				$formData.tags = [...$formData.tags, { id: 0, name: '' }];
			}}>Add</Button
		>
	</div>

	<div class="mt-2">
		{#if $delayed}
			<Button disabled>Please wait</Button>
		{:else}
			<Form.Button>Submit</Form.Button>
		{/if}
	</div>
	<div class="mt-2">
		<SuperDebug data={$formData} />
	</div>
</form>
