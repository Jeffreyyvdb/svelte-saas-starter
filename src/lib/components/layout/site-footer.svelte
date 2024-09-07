<script lang="ts">
	import { footerLinks, siteConfig } from '$lib/config/site';
	import { cn } from '$lib/utils';
	import NewsletterForm from '../forms/newsletter-form.svelte';
	import { Icons } from '../shared/icons';
	import ModeToggle from '../shared/mode-toggle.svelte';

	interface SiteFooterProps {
		class?: string;
	}

	let { class: className }: SiteFooterProps = $props();
</script>

<footer class={cn('border-t', className)}>
	<div class="container grid max-w-6xl grid-cols-2 gap-6 py-14 md:grid-cols-5">
		{#each footerLinks as section}
			<div>
				<span class="text-sm font-medium text-foreground">
					{section.title}
				</span>
				<ul class="mt-4 list-inside space-y-3">
					{#each section.items as link}
						<li>
							<a href={link.href} class="text-sm text-muted-foreground hover:text-primary"
								>{link.title}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
		<div class="col-span-full flex flex-col items-end sm:col-span-1 md:col-span-2">
			<NewsletterForm></NewsletterForm>
		</div>
	</div>

	<div class="border-t py-4">
		<div class="container flex max-w-6xl items-center justify-between">
			<p class="text-left text-sm text-muted-foreground">
				Built by <a
					href="https://x.com/miickasmt"
					target="_blank"
					rel="noreferrer"
					class="font-medium underline underline-offset-4"
				>
					mickasmt
				</a>. Ported to Svelte by
				<a
					href={siteConfig.links.github}
					target="_blank"
					rel="noreferrer"
					class="font-medium underline underline-offset-4"
				>
					jeffreyyvdb
				</a>. Illustrations by
				<a
					href="https://popsy.co"
					target="_blank"
					rel="noreferrer"
					class="font-medium underline underline-offset-4"
				>
					Popsy
				</a>
			</p>
			<div class="flex items-center gap-3">
				<a
					href={siteConfig.links.github}
					target="_blank"
					rel="noreferrer"
					class="font-medium underline underline-offset-4"
				>
					<Icons.gitHub class="size-5" />
				</a>
				<ModeToggle></ModeToggle>
			</div>
		</div>
	</div>
</footer>
