<script>
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui/sonner';
	let { children } = $props();
</script>

<svelte:head>
	<title>svelte-saas-starter</title>
</svelte:head>

<Toaster></Toaster>
<ModeWatcher></ModeWatcher>
<div class="min-h-screen bg-background font-sans antialiased">
	{@render children?.()}
</div>
