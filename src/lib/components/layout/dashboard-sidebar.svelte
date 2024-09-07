<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { type SidebarNavItem } from '$lib';
	import { useMediaQuery } from '$lib/stores';
	import ScrollArea from '$lib/components/ui/scroll-area/scroll-area.svelte';
	import { cn, getIcon } from '$lib/utils';
	import { Button } from '../ui/button';
	import { PanelLeftClose, PanelRightClose } from 'lucide-svelte';
	import { Badge } from '../ui/badge';

	interface DashboardSidebarProps {
		links: SidebarNavItem[];
	}

	const { links }: DashboardSidebarProps = $props();

	const screenInfo = useMediaQuery(browser);

	const path = $page.url.href;


	let isSidebarExpanded = $state($screenInfo.isTablet);

	$inspect(isSidebarExpanded);
	$inspect(links);
</script>

<div class="sticky top-0 h-full">
	<ScrollArea class="h-full overflow-y-auto border-r">
		<aside
			class={cn(
				isSidebarExpanded ? 'w-[220px]  xl:w-[260px]' : 'w-[68px]',
				'hidden h-screen md:block'
			)}
		>
			<div class="flex h-full max-h-screen flex-1 flex-col gap-2">
				<div class="flex h-14 items-center p-4 lg:h-[60px]">
					{#if isSidebarExpanded}
						<!-- <ProjectSwitcher></ProjectSwitcher> -->
					{/if}
					<Button
						variant="ghost"
						size="icon"
						class="ml-auto size-9 lg:size-8"
						onclick={() => (isSidebarExpanded = !isSidebarExpanded)}
					>
						{#if isSidebarExpanded}
							<PanelLeftClose size={18} class="stroke-muted-foreground" />
						{:else}
							<PanelRightClose size={18} class="stroke-muted-foreground" />
						{/if}
						<span class="sr-only">Toggle Sidebar</span>
					</Button>
				</div>

				<nav class="flex flex-1 flex-col gap-8 px-4 pt-4">
					{#each links as section}
						<section class="flex flex-col gap-0.5">
							{#if isSidebarExpanded}
								<span class="text-xs text-muted-foreground">{section.title}</span>
							{:else}
								<div class="h-4"></div>
							{/if}

							{#each section.items as item}
								{#if item.href && isSidebarExpanded}
									<a
										href={item.disabled ? '#' : item.href}
										class={cn(
											'flex items-center gap-3 rounded-md p-2 text-sm font-medium hover:bg-muted',
											// Is this path correct?
											path === item.href
												? 'bg-muted'
												: 'text-muted-foreground hover:text-accent-foreground',
											item.disabled &&
												'cursor-not-allowed opacity-80 hover:bg-transparent hover:text-muted-foreground'
										)}
									>
										<!-- svelte-ignore svelte_component_deprecated -->
										<svelte:component this={getIcon(item.icon) || 'arrowRight'} class="size-5" />
										{item.title}
										{#if item.badge}
											<Badge
												class="ml-auto flex size-5 shrink-0 items-center justify-center rounded-full"
											>
												{item.badge}
											</Badge>
										{/if}
									</a>
								{/if}
							{/each}
						</section>
					{/each}
				</nav>
			</div>
		</aside>
	</ScrollArea>
</div>
