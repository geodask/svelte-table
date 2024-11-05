<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<li class="list-item my-1">
	{@render children()}
</li>
