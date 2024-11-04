<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { TableIcon, Table } from 'lucide-svelte';
</script>

<div class="flex min-h-screen flex-col">
	<header class="flex h-14 items-center px-4 lg:px-6">
		<a class="flex items-center justify-center" href="#">
			<TableIcon class="mr-2 h-6 w-6" />
			<span class="font-bold">HeadlessTable</span>
		</a>
		<nav class="ml-auto flex gap-4 sm:gap-6">
			<a class="text-sm font-medium underline-offset-4 hover:underline" href="#docs"> Docs </a>
			<a class="text-sm font-medium underline-offset-4 hover:underline" href="#github"> GitHub </a>
		</nav>
	</header>
	<main class="flex-1">
		<section class="w-full py-12 md:py-24 lg:py-32 xl:py-48">
			<div class="container px-4 md:px-6">
				<div class="flex flex-col items-center space-y-4 text-center">
					<div class="space-y-2">
						<h1
							class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
						>
							Powerful Headless Table Library
						</h1>
						<p class="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
							Build flexible, accessible, and performant tables with ease. Perfect for React
							applications.
						</p>
					</div>
					<div class="space-x-4">
						<Button>Get Started</Button>
						<Button variant="outline">View on GitHub</Button>
					</div>
				</div>
			</div>
		</section>
		<section id="features" class="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
			<div class="container px-4 md:px-6">
				<h2 class="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
					Key Features
				</h2>
				<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					<div class="flex flex-col items-center text-center">
						<Table class="text-primary mb-4 h-12 w-12" />
						<h3 class="mb-2 text-xl font-bold">Fully Customizable</h3>
						<p class="text-gray-500 dark:text-gray-400">
							Complete control over your table's look and behavior.
						</p>
					</div>
					<div class="flex flex-col items-center text-center">
						<svg
							class=" text-primary mb-4 h-12 w-12"
							fill="none"
							height="24"
							stroke="currentColor"
							viewBox="0 0 24 24"
							width="24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
						</svg>
						<h3 class="mb-2 text-xl font-bold">High Performance</h3>
						<p class="text-gray-500 dark:text-gray-400">
							Optimized for handling large datasets efficiently.
						</p>
					</div>
					<div class="flex flex-col items-center text-center">
						<svg
							class=" text-primary mb-4 h-12 w-12"
							fill="none"
							height="24"
							stroke="currentColor"
							viewBox="0 0 24 24"
							width="24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="12" cy="12" r="10" />
							<path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
						</svg>
						<h3 class="mb-2 text-xl font-bold">Accessible</h3>
						<p class="text-gray-500 dark:text-gray-400">
							Built with accessibility in mind, following WCAG guidelines.
						</p>
					</div>
				</div>
			</div>
		</section>

		<section id="cta" class="bg-primary text-primary-foreground w-full py-12 md:py-24 lg:py-32">
			<div class="container px-4 md:px-6">
				<div class="flex flex-col items-center space-y-4 text-center">
					<div class="space-y-2">
						<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Ready to build amazing tables?
						</h2>
						<p class="text-primary-foreground/80 mx-auto max-w-[600px] md:text-xl">
							Get started with HeadlessTable today and transform your data presentation.
						</p>
					</div>
					<div class="w-full max-w-sm space-y-2">
						<form class="flex space-x-2">
							<Input
								class="bg-primary-foreground text-primary max-w-lg flex-1"
								placeholder="Enter your email"
								type="email"
							/>
							<Button type="submit" variant="secondary">Subscribe</Button>
						</form>
						<p class="text-primary-foreground/60 text-xs">
							Get notified about updates. No spam, we promise.
						</p>
					</div>
				</div>
			</div>
		</section>
	</main>
	<footer
		class="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6"
	>
		<p class="text-xs text-gray-500 dark:text-gray-400">
			© 2024 HeadlessTable. All rights reserved.
		</p>
		<nav class="flex gap-4 sm:ml-auto sm:gap-6">
			<a class="text-xs underline-offset-4 hover:underline" href="#">Terms of Service</a>
			<a class="text-xs underline-offset-4 hover:underline" href="#">Privacy</a>
		</nav>
	</footer>
</div>
