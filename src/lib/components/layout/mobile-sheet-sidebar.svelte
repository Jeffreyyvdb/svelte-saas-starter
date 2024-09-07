<script lang="ts">
	import { browser } from '$app/environment';
	import { useMediaQuery } from '$lib/stores';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Button } from '../ui/button';
	import { Menu } from 'lucide-svelte';
	import { ScrollArea } from '../ui/scroll-area';
	import { Icons } from '../shared/icons';
	import { siteConfig } from '$lib/config/site';
	import type { SidebarNavItem } from '$lib';
	import { cn, getIcon } from '$lib/utils';
	import { Badge } from '../ui/badge';
	import { page } from '$app/stores';
	import ProjectSwitcher from '../dashboard/project-switcher.svelte';

	interface MobileSheetSidebarProps {
		links: SidebarNavItem[];
	}

	const { links }: MobileSheetSidebarProps = $props();

	let open = $state(false);

	const screenInfo = useMediaQuery(browser);

	let isSm = $derived($screenInfo.isSm);
	let isMobile = $derived($screenInfo.isMobile);
	let isTablet = $derived($screenInfo.isTablet);
	const path = $page.url.href;
</script>

{#if isSm || isMobile}
	<Sheet.Root bind:open>
		<Sheet.Trigger>
			<Button variant="outline" size="icon" class="size-9 shrink-0 md:hidden">
				<Menu class="size-5" />
				<span class="sr-only">Toggle navigation menu</span>
			</Button>
		</Sheet.Trigger>
		<Sheet.Content side="left" class="flex flex-col p-0">
			<ScrollArea class="h-full overflow-y-auto">
				<div class="flex h-screen flex-col">
					<nav class="flex flex-1 flex-col gap-y-8 p-6 text-lg font-medium">
						<!-- svelte-ignore a11y_invalid_attribute -->
						<a href="#" class="flex items-center gap-2 text-lg font-semibold">
							<Icons.logo class="size-6" />
							<span class="font-urban text-xl font-bold">
								{siteConfig.name}
							</span>
						</a>
						<ProjectSwitcher large />
						{#each links as section}
							<section class="flex flex-col gap-0.5">
								<p class="text-xs text-muted-foreground">
									{section.title}
								</p>

								{#each section.items as item}
									{#if item.href}
										<a
											onclick={() => {
												if (!item.disabled) open = false;
											}}
											href={item.disabled ? '#' : item.href}
											class={cn(
												'flex items-center gap-3 rounded-md p-2 text-sm font-medium hover:bg-muted',
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
													>{item.badge}</Badge
												>
											{/if}
										</a>
									{/if}
								{/each}
							</section>
						{/each}
					</nav>
				</div>
			</ScrollArea>
		</Sheet.Content>
	</Sheet.Root>
{/if}
