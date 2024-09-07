<script lang="ts">
	import MobileNav from '$lib/components/layout/mobile-nav.svelte';
	import Navbar from '$lib/components/layout/navbar.svelte';
	import SiteFooter from '$lib/components/layout/site-footer.svelte';
</script>

<div class="flex min-h-screen flex-col">
	<MobileNav />
	<Navbar scroll={true} />
	<main class="flex-1">
		<slot></slot>
	</main>
	<SiteFooter />
</div>
