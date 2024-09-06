<script lang="ts">
	import MobileNav from '$lib/components/layout/mobile-nav.svelte';
	import Navbar from '$lib/components/layout/navbar.svelte';
</script>

<div class="flex min-h-screen flex-col">
	<MobileNav />
	<Navbar />
	<main class="flex-1">
		<slot></slot>
	</main>
</div>
