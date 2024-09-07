<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { Icons } from '$lib/components/shared/icons';
	import type { Profile } from '../dashboard/profile';

	interface UserAvatarProps {
		profile: Profile;
		class?: string;
	}

	const { profile, class: className = '', ...others }: UserAvatarProps = $props();
</script>

<Avatar.Root class={className} {...others}>
	{#if profile.avatarUrl}
		<Avatar.Image alt="User Avatar" referrerpolicy="no-referrer" src={profile.avatarUrl} />
	{:else}
		<Avatar.Fallback>
			<span class="sr-only">{profile.firstName}</span>
			<Icons.user class="size-4" />
		</Avatar.Fallback>
	{/if}
</Avatar.Root>
