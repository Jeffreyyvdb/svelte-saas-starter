<script lang="ts">
	import { type SidebarNavItem } from '$lib';
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { cn, getIcon } from '$lib/utils';
	import * as Command from '$lib/components/ui/command';
	import { goto } from '$app/navigation';
	import { Laptop, Moon, Sun } from 'lucide-svelte';
	import { resetMode, setMode } from 'mode-watcher';

	interface SearchCommandProps {
		links: SidebarNavItem[];
	}

	const { links }: SearchCommandProps = $props();
	let open = $state(false);

	onMount(() => {
		function handleKeydown(e: KeyboardEvent) {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				open = true;
			}
		}
		document.addEventListener('keydown', handleKeydown);

		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	});

	function runCommand(cmd: () => void) {
		open = false;
		cmd();
	}
</script>

<Button
	variant="outline"
	class={cn(
		"md:w-72' relative h-9 w-full justify-start rounded-md bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12"
	)}
	onclick={() => (open = true)}
>
	<span class="inline-flex"
		>Search
		<span class="hidden sm:inline-flex">&nbsp;or run a command</span>...
	</span>
	<kbd
		class="pointer-events-none absolute right-[0.3rem] top-[0.45rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex"
	>
		<span class="text-xs">⌘</span>K</kbd
	>
</Button>

<Command.Dialog {open}>
	<Command.Input placeholder="Search or type a command..." />
	<Command.List>
		<Command.Empty>No results found.</Command.Empty>
		{#each links as section}
			<Command.Group heading={section.title}>
				{#each section.items as item}
					<Command.Item
						onSelect={() => {
							runCommand(() => {
								item.href && goto(item.href);
							});
						}}
					>
						<!-- svelte-ignore svelte_component_deprecated -->
						<svelte:component this={getIcon(item.icon) || 'arrowRight'} class="mr-2 size-5" />
						{item.title}
					</Command.Item>
				{/each}
			</Command.Group>
		{/each}
		<Command.Separator />
		<Command.Group heading="Theme">
			<Command.Item value="light" onSelect={() => runCommand(() => setMode('light'))}>
				<Sun class="mr-2 h-4 w-4" />
				Light
			</Command.Item>
			<Command.Item value="dark" onSelect={() => runCommand(() => setMode('dark'))}>
				<Moon class="mr-2 h-4 w-4" />
				Dark
			</Command.Item>
			<Command.Item value="system" onSelect={() => runCommand(() => resetMode())}>
				<Laptop class="mr-2 h-4 w-4" />
				System
			</Command.Item>
		</Command.Group>
	</Command.List>
</Command.Dialog>
