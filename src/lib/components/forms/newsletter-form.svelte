<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { toast } from 'svelte-sonner';
	import { enhance } from '$app/forms';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';

	function handleSubmit() {
		toast.success('Subscribed to newsletter', {
			description: 'You will receive an email shortly.'
		});
	}
</script>

<form class="w-full space-y-2 sm:max-w-sm" method="POST" use:enhance>
	<Label>Subscribe to our newsletter</Label>
	<Input type="email" class="rounded-full px-4" />
	<Button onclick={handleSubmit} size="sm" class="rounded-full px-4">Subscribe</Button>
</form>
