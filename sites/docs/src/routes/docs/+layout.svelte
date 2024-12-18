<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar';
	import AppSidebar from '$lib/components/organisms/layout/app-sidebar.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import { Button } from '$lib/components/ui/button';
	import { toggleMode } from 'mode-watcher';
	import { Sun, Moon } from 'lucide-svelte';

	let { children } = $props();
</script>

<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		<header class="sticky top-0 z-20 flex h-16 items-center gap-2 border-b bg-background px-4">
			<Sidebar.Trigger class="-ml-1" />
			<Separator orientation="vertical" class="mr-2 h-4" />
			<Button onclick={toggleMode} class="ml-auto" variant="outline" size="icon">
				<Sun
					class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
				/>
				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		</header>

		<div class="flex">
			<main class="mx-auto w-full max-w-5xl p-8">
				{@render children()}
			</main>
			<!-- 
			<aside class="sticky top-[100px] hidden bg-background p-8 xl:block">
				<ul>
					<li>Item 1</li>
					<li>Item 2</li>
					<li>Item 3</li>
				</ul>
			</aside> -->
		</div>

		<!-- <footer class="flex w-full flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row">
			<p class="text-xs text-gray-500 dark:text-gray-400">
				© 2024 SvelteTable. All rights reserved.
			</p>
			<nav class="flex gap-4 sm:ml-auto sm:gap-6">
				<a class="text-xs underline-offset-4 hover:underline" href="/terms-of-service"
					>Terms of Service</a
				>
				<a class="text-xs underline-offset-4 hover:underline" href="/privacy">Privacy</a>
			</nav>
		</footer> -->
	</Sidebar.Inset>
</Sidebar.Provider>
