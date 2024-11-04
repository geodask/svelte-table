<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<h4 class="scroll-m-20 text-xl font-semibold tracking-tight mt-10">
	{@render children()}
</h4>
