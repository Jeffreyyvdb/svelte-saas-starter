<script>
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
</script>

<svelte:head>
	<title>svelte-saas-starter</title>
</svelte:head>

<ModeWatcher></ModeWatcher>
<div class="min-h-screen bg-background font-sans antialiased">
	<slot></slot>
</div>
