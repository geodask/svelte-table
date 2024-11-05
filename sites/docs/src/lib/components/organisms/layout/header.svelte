<script lang="ts">
	import { TableIcon, ExternalLink } from 'lucide-svelte';
	import Logo from '../logo.svelte';

	type Link = {
		label: string;
		href: string;
		external?: boolean;
	};
</script>

<header class="flex h-14 items-center px-4 lg:px-6">
	<a class="flex items-center justify-center" href="/">
		<Logo width={24} class="mr-2" />
		<!-- <TableIcon class="mr-2 h-6 w-6" /> -->
		<span class="font-bold">SvelteTable</span>
	</a>
	<nav class="ml-auto flex gap-4 sm:gap-6">
		{@render Link({ label: 'Docs', href: '/docs' })}
		{@render Link({
			label: 'GitHub',
			href: 'https://github.com/geodask/svelte-table',
			external: true
		})}
	</nav>
</header>

{#snippet Link({ label, href, external = false }: Link)}
	<a
		class="flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
		{href}
		{...external ? { target: '_blank' } : {}}
	>
		{label}
		{#if external}
			<ExternalLink size={12} />
		{/if}
	</a>
{/snippet}
