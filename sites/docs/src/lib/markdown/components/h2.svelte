<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<h2 class="scroll-m-20 text-3xl font-semibold tracking-tight mt-6 mb-2">
	{@render children()}
</h2>
