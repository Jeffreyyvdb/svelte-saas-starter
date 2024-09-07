<script lang="ts">
	import { cn } from '$lib/utils';
	import { Check, Plus } from 'lucide-svelte';
	import { Button, buttonVariants } from '../ui/button';

	interface ProjectListProps {
		selected: ProjectType;
		projects: ProjectType[];
		setOpenPopover: (value: boolean) => void;
	}

	const { selected, projects, setOpenPopover }: ProjectListProps = $props();
</script>

<div class="flex flex-col gap-1">
	{#each projects as project}
		<a
			class={cn(
				buttonVariants({ variant: 'ghost' }),
				'relative flex h-9 items-center gap-3 p-3 text-muted-foreground hover:text-foreground'
			)}
			href="/"
			onclick={() => setOpenPopover(false)}
		>
			<div class={cn('size-3 shrink-0 rounded-full', project.color)}></div>
			<span
				class="flex-1 truncate text-sm {selected.slug === project.slug
					? 'font-medium text-foreground'
					: 'font-normal'}">{project.slug}</span
			>
			{#if selected.slug === project.slug}
				<span class="absolute inset-y-0 right-0 flex items-center pr-3 text-foreground">
					<Check size={18} aria-hidden="true" />
				</span>
			{/if}
		</a>
	{/each}
	<Button
		variant="outline"
		class="relative flex h-9 items-center justify-center gap-2 p-2"
		onclick={() => {
			setOpenPopover(false);
		}}
	>
		<Plus size={18} class="absolute left-2.5 top-2" />
		<span class="flex-1 truncate text-center">New Project</span>
	</Button>
</div>
