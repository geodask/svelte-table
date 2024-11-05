<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Logo from '../logo.svelte';
</script>

<section class="w-full py-12 md:py-24 lg:py-32 xl:py-32">
	<div class="container px-4 md:px-6">
		<div class="flex flex-col items-center space-y-4 text-center">
			<Logo />
			<div class="max-w-2xl space-y-2">
				<h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
					Powerful Headless Table Library for Svelte
				</h1>
				<p class="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
					Build flexible, accessible, and performant tables with ease for your Svelte applications.
				</p>
			</div>
			<div class="space-x-4">
				<Button href="/docs">Get Started</Button>
				<Button variant="outline" href="https://github.com/geodask/svelte-table">
					View on GitHub
				</Button>
			</div>
		</div>
	</div>
</section>
