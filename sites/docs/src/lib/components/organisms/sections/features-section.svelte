<script lang="ts">
	import { Table } from 'lucide-svelte';
</script>

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
