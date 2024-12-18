<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight mt-6 mb-2">
	{@render children()}
</h3>
