<script>
	import MaxWidthWrapper from '../shared/max-width-wrapper.svelte';
</script>

<div class="pb-6 sm:pb-16">
	<MaxWidthWrapper>
		<div class="rounded-xl md:bg-muted/30 md:p-3.5 md:ring-1 md:ring-inset md:ring-border">
			<div class="relative aspect-video overflow-hidden rounded-xl border md:rounded-lg">
				<enhanced:img
					alt="preview landing"
					class="size-full object-cover object-center dark:opacity-85 dark:invert"
					src="/src/lib/assets/blog/blog-post-3.jpg"
				/>
			</div>
		</div>
	</MaxWidthWrapper>
</div>
