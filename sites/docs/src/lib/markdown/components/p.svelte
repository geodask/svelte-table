<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<p class="leading-7 [&:not(:first-child)]:mt-6">
	{@render children()}
</p>
