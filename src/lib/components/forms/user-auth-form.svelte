<script>
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { Icons } from '../shared/icons';
</script>

<div class="grid gap-6">
	<form>
		<div class="grid gap-2">
			<div class="grap-1 grid">
				<Label class="sr-only">Email</Label>
				<Input id="email" placeholder="name@example.com" type="email" />
			</div>
			<Button href="/dashboard">Sign In With Email</Button>
		</div>
	</form>
	<div class="relative">
		<div class="absolute inset-0 flex items-center">
			<span class="w-full border-t"></span>
		</div>
		<div class="relative flex justify-center text-xs uppercase">
			<span class="bg-background px-2 text-muted-foreground"> Or continue with </span>
		</div>
	</div>
	<Button variant="outline" href="/dashboard"><Icons.google class="mr-2 size-4" /> Google</Button>
</div>
