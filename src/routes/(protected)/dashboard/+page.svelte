<script lang="ts">
	import DashboardHeader from '$lib/components/shared/dashboard-header.svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<DashboardHeader
	heading="Dashboard"
	text={`Current Role : ADMIN — Change your role in settings.`}
/>

<!-- <EmptyPlaceholder>
	<EmptyPlaceholder.Icon name="post" />
	<EmptyPlaceholder.Title>No content created</EmptyPlaceholder.Title>
	<EmptyPlaceholder.Description>
		You don&apos;t have any content yet. Start creating content.
	</EmptyPlaceholder.Description>
	<Button>Add Content</Button>
</EmptyPlaceholder> -->
