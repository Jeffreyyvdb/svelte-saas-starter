<script lang="ts">
	import { browser } from '$app/environment';
	import * as Drawer from '$lib/components/ui/drawer';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { useMediaQuery } from '$lib/stores';
	import UserAvatar from '../shared/user-avatar.svelte';
	import type { Profile } from './profile';
	import { LayoutDashboard, Lock, LogOut, Settings } from 'lucide-svelte';

	const profile: Profile = {
		email: 'jeffreyyvdb',
		firstName: 'Jeffrey',
		lastName: '',
		avatarUrl: 'https://avatars.githubusercontent.com/u/60582071?v=4'
	};

	const screenInfo = useMediaQuery(browser);
	let isMobile = $derived($screenInfo?.isMobile);
	let open = $state(false);
</script>

{#if isMobile}
	<Drawer.Root bind:open>
		<Drawer.Trigger>
			<UserAvatar class="size-9 border" {profile}></UserAvatar>
		</Drawer.Trigger>
		<Drawer.Portal>
			<Drawer.Overlay
				class="fixed inset-0 z-40 h-full bg-background/80 backdrop-blur-sm"
				onclick={() => (open = false)}
			></Drawer.Overlay>
			<Drawer.Content
				class="fixed inset-x-0 bottom-0 z-50 mt-24 overflow-hidden rounded-t-[10px] border bg-background px-3 text-sm"
			>
				<div class="sticky top-0 z-20 flex w-full items-center justify-center bg-inherit">
					<div class="my-3 h-1.5 w-16 rounded-full bg-muted-foreground/20"></div>
				</div>

				<div class="flex items-center justify-start gap-2 p-2">
					<div class="flex flex-col">
						{#if profile.firstName || profile.lastName}
							<p class="font-medium">{`${profile.firstName} ${profile.lastName}`}</p>
						{/if}

						{#if profile.email}
							<p class="w-[200px] truncate text-muted-foreground">
								{profile.email}
							</p>
						{/if}
					</div>
				</div>

				<ul class="mb-14 mt-1 w-full text-muted-foreground" role="list">
					<li class="rounded-lg text-foreground hover:bg-muted">
						<a
							href="/admin"
							onclick={() => (open = false)}
							class="flex w-full items-center gap-3 px-2.5 py-2"
						>
							<Lock class="size-4" />
							<p class="text-sm">Admin</p></a
						>
					</li>

					<li class="rounded-lg text-foreground hover:bg-muted">
						<a
							href="/dashboard"
							onclick={() => (open = false)}
							class="flex w-full items-center gap-3 px-2.5 py-2"
						>
							<LayoutDashboard class="size-4" />
							<p class="text-sm">Dashboard</p>
						</a>
					</li>

					<li class="rounded-lg text-foreground hover:bg-muted">
						<a
							href="/dashboard/settings"
							onclick={() => (open = false)}
							class="flex w-full items-center gap-3 px-2.5 py-2"
						>
							<Settings class="size-4" />
							<p class="text-sm">Settings</p>
						</a>
					</li>
					<li class="rounded-lg text-foreground hover:bg-muted">
						<button
							onclick={() => (open = false)}
							class="flex w-full items-center gap-3 px-2.5 py-2"
						>
							<LogOut class="size-4" />
							<p class="text-sm">Log out</p>
						</button>
					</li>
				</ul>
			</Drawer.Content>
		</Drawer.Portal>
	</Drawer.Root>
{:else}
	<DropdownMenu.Root {open}>
		<DropdownMenu.Trigger>
			<UserAvatar {profile} class="size-8 border" />
		</DropdownMenu.Trigger>
		<DropdownMenu.Content align="end">
			<div class="flex items-center justify-start gap-2 p-2">
				<div class="flex flex-col space-y-1 leading-none">
					{#if profile.firstName || profile.lastName}
						<p class="font-medium">{`${profile.firstName} ${profile.lastName}`}</p>
					{/if}

					{#if profile.email}
						<p class="w-[200px] truncate text-sm text-muted-foreground">
							{profile.email}
						</p>
					{/if}
				</div>
			</div>
			<DropdownMenu.Separator />
			<DropdownMenu.Item>
				<a href="/admin" class="flex items-center space-x-2.5">
					<Lock class="size-4" />
					<p class="text-sm">Admin</p>
				</a>
			</DropdownMenu.Item>

			<DropdownMenu.Item>
				<a href="/dashboard/dashboard" class="flex items-center space-x-2.5">
					<LayoutDashboard class="size-4" />
					<p class="text-sm">Dashboard</p>
				</a>
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				<a href="/dashboard/settings" class="flex items-center space-x-2.5">
					<Settings class="size-4" />
					<p class="text-sm">Settings</p>
				</a>
			</DropdownMenu.Item>
			<DropdownMenu.Separator />
			<DropdownMenu.Item class="cursor-pointer">
				<div class="flex items-center space-x-2.5">
					<LogOut class="size-4" />
					<p class="text-sm">Log out</p>
				</div>
			</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
{/if}
