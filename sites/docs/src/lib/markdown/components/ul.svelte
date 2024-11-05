<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<ul class="list-disc mb-2 ml-12">
	{@render children()}
</ul>
