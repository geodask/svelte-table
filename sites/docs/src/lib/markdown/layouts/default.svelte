<script lang="ts" module>
	export { h1, h2, h3, h4, p } from '../components';
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';

	type FrontMatterProps = {
		title: string;
		subtitle: string;
	};

	type LayoutProps = FrontMatterProps & {
		children: Snippet;
	};

	const { title, subtitle, children }: LayoutProps = $props();
</script>

<h3 class="scroll-m-20 pb-2 text-4xl font-semibold tracking-tight transition-colors first:mt-0">
	{title}
</h3>
<p class="text-muted-foreground mb-8 border-b text-xl">{subtitle}</p>

{@render children()}
