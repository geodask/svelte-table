<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<code class="rounded-sm bg-slate-200 dark:bg-slate-800 px-1 font-bold leading-5">
	{@render children()}
</code>
