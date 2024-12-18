<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Github, Moon, Sun } from 'lucide-svelte';
	import { toggleMode } from 'mode-watcher';
</script>

<div class="flex min-h-screen flex-col bg-background text-foreground">
	<header class="container z-40 bg-background">
		<div class="flex h-20 items-center justify-between py-6">
			<div class="flex gap-6 md:gap-10">
				<a href="/" class="flex items-center space-x-2">
					<span class="inline-block font-bold">@geodask/svelte-table</span>
				</a>
				<nav class="flex gap-6">
					<a href="/docs" class="flex items-center text-sm font-medium text-muted-foreground">
						Documentation
					</a>
				</nav>
			</div>
			<div class="flex items-center space-x-4">
				<nav class="flex items-center space-x-1">
					<a href="https://github.com/geodask/svelte-table" target="_blank" rel="noreferrer">
						<Button variant="ghost" size="icon">
							<Github class="h-[1.2rem] w-[1.2rem]" />
							<span class="sr-only">GitHub</span>
						</Button>
					</a>
					<Button onclick={toggleMode} variant="outline" size="icon">
						<Sun
							class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
						/>
						<Moon
							class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
						/>
						<span class="sr-only">Toggle theme</span>
					</Button>
				</nav>
			</div>
		</div>
	</header>
	<main class="flex-1">
		<section class="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
			<div class="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
				<h1 class="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
					The Ultimate Data Table Solution for Svelte
				</h1>
				<p class="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
					Build complex, accessible, and highly customizable tables with ease using SvelteTable.
				</p>
				<div class="space-x-4">
					<Button>
						<a href="/docs">Get Started</a>
					</Button>
					<Button variant="outline">
						<a href="https://github.com/geodask/svelte-table">GitHub</a>
					</Button>
				</div>
			</div>
		</section>
		<section id="features" class="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24">
			<div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
				<h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Features</h2>
				<p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
					Discover the power of SvelteTable with these standout features.
				</p>
			</div>
			<div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
				<div class="relative overflow-hidden rounded-lg border bg-background p-2">
					<div class="flex h-[180px] flex-col justify-between rounded-md p-6">
						<div class="space-y-2">
							<h3 class="font-bold">Headless Architecture</h3>
							<p class="text-sm text-muted-foreground">
								Total control over markup and styles. Integrate seamlessly with your UI.
							</p>
						</div>
					</div>
				</div>
				<div class="relative overflow-hidden rounded-lg border bg-background p-2">
					<div class="flex h-[180px] flex-col justify-between rounded-md p-6">
						<div class="space-y-2">
							<h3 class="font-bold">Sorting & Filtering</h3>
							<p class="text-sm text-muted-foreground">
								Advanced sorting and filtering with support for custom logic.
							</p>
						</div>
					</div>
				</div>
				<div class="relative overflow-hidden rounded-lg border bg-background p-2">
					<div class="flex h-[180px] flex-col justify-between rounded-md p-6">
						<div class="space-y-2">
							<h3 class="font-bold">Pagination</h3>
							<p class="text-sm text-muted-foreground">
								Effortless navigation with fully customizable page sizes.
							</p>
						</div>
					</div>
				</div>
				<div class="relative overflow-hidden rounded-lg border bg-background p-2">
					<div class="flex h-[180px] flex-col justify-between rounded-md p-6">
						<div class="space-y-2">
							<h3 class="font-bold">Row Selection</h3>
							<p class="text-sm text-muted-foreground">
								Support for single and multi-row selection with flexible logic.
							</p>
						</div>
					</div>
				</div>
				<div class="relative overflow-hidden rounded-lg border bg-background p-2">
					<div class="flex h-[180px] flex-col justify-between rounded-md p-6">
						<div class="space-y-2">
							<h3 class="font-bold">Accessibility</h3>
							<p class="text-sm text-muted-foreground">
								Designed with accessibility in mind, adhering to WAI-ARIA standards.
							</p>
						</div>
					</div>
				</div>
				<div class="relative overflow-hidden rounded-lg border bg-background p-2">
					<div class="flex h-[180px] flex-col justify-between rounded-md p-6">
						<div class="space-y-2">
							<h3 class="font-bold">TypeScript Support</h3>
							<p class="text-sm text-muted-foreground">
								Comprehensive TypeScript types for a seamless development experience.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
	<footer class="py-6 md:px-8 md:py-0">
		<div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
			<p class="text-center text-sm leading-loose text-muted-foreground md:text-left">
				Built by
				<a
					href="https://github.com/geodask"
					target="_blank"
					rel="noreferrer"
					class="font-medium underline underline-offset-4"
				>
					geodask
				</a>
				. The source code is available on
				<a
					href="https://github.com/geodask/svelte-table"
					target="_blank"
					rel="noreferrer"
					class="font-medium underline underline-offset-4"
				>
					GitHub
				</a>
				.
			</p>
		</div>
	</footer>
</div>
