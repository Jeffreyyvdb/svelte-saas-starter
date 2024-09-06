<script lang="ts">
	import { cn } from '$lib/utils';

	interface Props {
		class?: string;
		large?: boolean;
		children?: any;
	}

	const { class: className = '', large = false, children }: Props = $props();
</script>

<div class={cn('container', large ? 'max-w-screen-2xl' : 'max-w-6xl', className)}>
	{@render children()}
</div>
