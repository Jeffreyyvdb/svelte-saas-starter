<script lang="ts">
	interface DashboardHeaderProps {
		heading: string;
		text?: string;
		children?: any;
	}

	const { heading, text, children }: DashboardHeaderProps = $props();
</script>

<div class="flex items-center justify-between">
	<div class="grid gap-1">
		<h1 class="font-heading text-2xl font-semibold">{heading}</h1>
		{#if text}
			<p class="text-base text-muted-foreground">{text}</p>
		{/if}
	</div>
	{@render children()}
</div>
