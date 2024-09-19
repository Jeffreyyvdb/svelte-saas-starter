<script>
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui/sonner';
</script>

<svelte:head>
	<title>svelte-saas-starter</title>
</svelte:head>

<Toaster richColors expand={true}></Toaster>
<ModeWatcher></ModeWatcher>
<div class="min-h-screen bg-background font-sans antialiased">
	<slot></slot>
</div>
