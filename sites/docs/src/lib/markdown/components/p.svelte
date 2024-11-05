<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<p class="leading-7 mb-2">
	{@render children()}
</p>
