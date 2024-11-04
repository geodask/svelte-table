<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<h2 class="scroll-m-20 text-3xl font-semibold tracking-tight">
	{@render children()}
</h2>
