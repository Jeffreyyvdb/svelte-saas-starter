<script lang="ts">
	import DashboardHeader from '$lib/components/shared/dashboard-header.svelte';
	import OpinionatedForm from '$lib/components/forms/opinionated-form.svelte';

	let { data } = $props();
</script>

<DashboardHeader
	heading="Dashboard"
	text={`Current Role : ADMIN — Change your role in settings.`}
/>

<div class="flex gap-4">
	<OpinionatedForm data={data.form} id="form1" class="flex-1" />
	<OpinionatedForm data={data.form} id="form2" class="flex-1" />
</div>

<!-- <EmptyPlaceholder>
	<EmptyPlaceholder.Icon name="post" />
	<EmptyPlaceholder.Title>No content created</EmptyPlaceholder.Title>
	<EmptyPlaceholder.Description>
		You don&apos;t have any content yet. Start creating content.
	</EmptyPlaceholder.Description>
	<Button>Add Content</Button>
</EmptyPlaceholder> -->
