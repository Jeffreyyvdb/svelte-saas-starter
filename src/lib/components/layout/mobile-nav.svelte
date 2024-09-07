<script lang="ts">
	import { cn } from '$lib/utils';
	import { marketingConfig } from '$lib/config/marketing';
	import { Menu, X } from 'lucide-svelte';
	import { siteConfig } from '$lib/config/site';
	import { Icons } from '../shared/icons';
	import ModeToggle from '../shared/mode-toggle.svelte';

	let open = $state(false);
	// Set this variable to the current opended layout
	let selectedLayout: string;
	const links = marketingConfig.mainNav;
</script>

<button
	onclick={() => (open = !open)}
	class={cn(
		'fixed right-2 top-2.5 z-50 rounded-full p-2 transition-colors duration-200 hover:bg-muted focus:outline-none active:bg-muted md:hidden',
		open && 'hover:bg-muted active:bg-muted'
	)}
>
	{#if open}
		<X class="size-5 text-muted-foreground" />
	{:else}
		<Menu class="size-5 text-muted-foreground" />
	{/if}
</button>

<nav
	class={cn(
		'fixed inset-0 z-20 hidden w-full overflow-auto bg-background px-5 py-16 lg:hidden',
		open && 'block'
	)}
>
	<ul class="grid divide-y divide-muted">
		{#each links as link}
			<li class="py-3">
				<a
					href={link.href}
					onclick={() => (open = false)}
					class="flexw-full font-medium capitalize"
				>
					{link.title}
				</a>
			</li>
		{/each}

		<li class="py-3">
			<a href="/admin" class="flex w-full font-medium capitalize">Admin</a>
		</li>

		<li class="py-3">
			<a href="/dashboard" class="flex w-full font-medium capitalize">Dashboard</a>
		</li>

		<li class="py-3">
			<a href="/login" class="flex w-full font-medium capitalize">Login</a>
		</li>
		<li class="py-3">
			<a href="/register" class="flex w-full font-medium capitalize">Sign Up</a>
		</li>
	</ul>

	<div class="mt-5 flex items-center justify-end space-x-4">
		<a href={siteConfig.links.github} target="_blank" rel="noreferrer">
			<Icons.gitHub class="size-6" />
			<span class="sr-only">GitHub</span>
		</a>
		<ModeToggle />
	</div>
</nav>
