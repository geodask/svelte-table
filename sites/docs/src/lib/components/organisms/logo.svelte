<script lang="ts">
	import { cn } from '$lib/utils';

	const { width = 80, class: className = '' }: { width?: number; class?: string } = $props();
</script>

<img class={cn('dark:hidden', className)} {width} src="/logo.svg" alt="logo" />
<img class={cn('hidden dark:block', className)} {width} src="/logo-dark.svg" alt="logo" />
