<script lang="ts">
	import UserAuthForm from '$lib/components/forms/user-auth-form.svelte';
	import { Icons } from '$lib/components/shared/icons';
	import { buttonVariants } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
</script>

<svelte:head>
	<title>Login</title>
	<meta name="description" content="Login to your account" />
</svelte:head>

<div class="container flex h-screen w-screen flex-col items-center justify-center">
	<a
		href="/"
		class={cn(
			buttonVariants({ variant: 'outline', size: 'sm' }),
			'absolute left-4 top-4 md:left-8 md:top-8'
		)}
	>
		<Icons.chevronLeft class="mr-2 size-4" />
		Back
	</a>

	<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
		<div class="flex flex-col space-y-2 text-center">
			<Icons.logo class="mx-auto size-6" />
			<h1 class="text-2xl font-semibold tracking-tight">Welcome back</h1>
			<p class="text-sm text-muted-foreground">Enter your email to sign in to your account</p>
		</div>
		<UserAuthForm></UserAuthForm>
		<p class="px-8 text-center text-sm text-muted-foreground">
			<a href="/register" class="hover:text-brand underline underline-offset-4">
				Don't have an account? Sign up</a
			>
		</p>
	</div>
</div>
