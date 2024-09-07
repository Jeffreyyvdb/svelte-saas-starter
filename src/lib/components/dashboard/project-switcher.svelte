<script lang="ts">
	import * as Popover from '$lib/components/ui/popover';
	import { cn } from '$lib/utils';
	import { ChevronsUpDown } from 'lucide-svelte';
	import { Button } from '../ui/button';
	import ProjectList from './project-list.svelte';

	const projects: ProjectType[] = [
		{
			title: 'Project 1',
			slug: 'project-number-one',
			color: 'bg-red-500'
		},
		{
			title: 'Project 2',
			slug: 'project-number-two',
			color: 'bg-blue-500'
		}
	];

	interface ProjectSwitcherProps {
		large?: boolean;
	}

	const { large = false }: ProjectSwitcherProps = $props();
	let openPopover = $state(false);
	const selected: ProjectType = projects[1];
</script>

<div>
	<Popover.Root bind:open={openPopover}>
		<Popover.Trigger>
			<Button class="h-8 px-2" variant={openPopover ? 'outline' : 'ghost'}>
				<div class="pr flex items-center space-x-3">
					<div class={cn('size-3 shrink-0 rounded-full', selected.color)}></div>
					<div class="flex items-center space-x-3">
						<span
							class={cn(
								'inline-block truncate text-sm font-medium xl:max-w-[120px]',
								large ? 'w-full' : 'max-w-[80px]'
							)}
						>
							{selected.slug}
						</span>
					</div>
				</div>
				<ChevronsUpDown class="size-4 text-muted-foreground" aria-hidden="true"></ChevronsUpDown>
			</Button>
		</Popover.Trigger>
		<Popover.Content align="start" class="max-w-60 p-2">
			<ProjectList
				{selected}
				{projects}
				setOpenPopover={(value: boolean) => (openPopover = value)}
			/>
		</Popover.Content>
	</Popover.Root>
</div>
