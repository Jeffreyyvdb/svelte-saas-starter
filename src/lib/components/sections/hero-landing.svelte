<script>
	import { cn } from '$lib/utils';
	import { buttonVariants } from '$lib/components/ui/button';
	import { Icons } from '$lib/components/shared/icons';
	import { siteConfig } from '$lib/config/site';
</script>

<section class="space-y-6 py-12 sm:py-20 lg:py-20">
	<div class="container flex max-w-5xl flex-col items-center gap-5 text-center">
		<a
			href="https://twitter.com/miickasmt/status/1810465801649938857"
			class={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'rounded-full px-4')}
			target="_blank"
		>
			<span class="mr-3">🎉</span>
			<span class="hidden md:flex">Introducing&nbsp;</span> Next Auth Roles Template on <Icons.twitter
				className="ml-2 size-3.5"
			/>
		</a>

		<h1
			class="font-urban text-balance text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]"
		>
			Kick off with a bang with{' '}
			<span
				class="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text font-extrabold text-transparent"
			>
				SaaS Starter
			</span>
		</h1>
		<p class=" max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8">
			Build your next project using Svelte 5 & shadcn-svelte.
		</p>

		<div class="flex justify-center space-x-2 md:space-x-4">
			<a href="/pricing" class={cn(buttonVariants({ size: 'lg' }), 'gap-2 rounded-full')}>
				<span>Go Pricing</span>
				<Icons.arrowRight className="size-4" /></a
			>
			<a
				href={siteConfig.links.github}
				target="_blank"
				rel="noreferrer"
				class={cn(
					buttonVariants({
						variant: 'outline',
						size: 'lg'
					}),
					'rounded-full px-5'
				)}
			>
				<Icons.gitHub class="mr-2 size-4" />
				<p>
					<span class="hidden sm:inline-block">Star on</span> GitHub{' '}
					<span class="font-semibold">1.5K</span>
				</p>
			</a>
		</div>
	</div>
</section>
