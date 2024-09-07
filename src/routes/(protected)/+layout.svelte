<script lang="ts">
	import SearchCommand from '$lib/components/dashboard/search-command.svelte';
	import UserAccountNav from '$lib/components/dashboard/user-account-nav.svelte';
	import DashboardSidebar from '$lib/components/layout/dashboard-sidebar.svelte';
	import MobileSheetSidebar from '$lib/components/layout/mobile-sheet-sidebar.svelte';
	import MaxWidthWrapper from '$lib/components/shared/max-width-wrapper.svelte';
	import ModeToggle from '$lib/components/shared/mode-toggle.svelte';
	import { sidebarLinks } from '$lib/config/dashboard';

	const { children } = $props();
</script>

<div class="relative flex min-h-screen w-full">
	<DashboardSidebar links={sidebarLinks} />
	<div class="flex flex-1 flex-col">
		<header class="sticky top-0 z-50 flex h-14 bg-background px-4 lg:h-[60px] xl:px-8">
			<MaxWidthWrapper class="flex max-w-7xl items-center gap-x-3 px-0">
				<MobileSheetSidebar links={sidebarLinks} />
				<div class="w-full flex-1">
					<SearchCommand links={sidebarLinks} />
				</div>

				<ModeToggle />
				<UserAccountNav />
			</MaxWidthWrapper>
		</header>
		<main class="flex-1 p-4 xl:px-8">
			<MaxWidthWrapper class="flex h-full max-w-7xl flex-col gap-4 px-0 lg:gap-6">
				{@render children()}
			</MaxWidthWrapper>
		</main>
	</div>
</div>
