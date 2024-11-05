<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Collapsible from '$lib/components/ui/collapsible/index.js';
	import { cn } from '$lib/utils';
	import { ChevronDown, Sidebar } from 'lucide-svelte';

	type NavigationItem = {
		label: string;
		href: string;
	};

	type SidebarItem = {
		label: string;
		items: NavigationItem[];
	};

	const items: SidebarItem[] = [
		{
			label: 'Getting Started',
			items: [
				{ label: 'Introduction', href: '/docs/introduction' },
				{ label: 'Installation', href: '/docs/installation' },
				{ label: 'Usage', href: '/docs/usage' }
			]
		},
		{
			label: 'Components',
			items: [
				{ label: 'Table', href: '/docs/table' },
				{ label: 'Column', href: '/docs/column' },
				{ label: 'Row', href: '/docs/row' }
			]
		},
		{
			label: 'API',
			items: [
				{ label: 'Table', href: '/docs/api/table' },
				{ label: 'Column', href: '/docs/api/column' },
				{ label: 'Row', href: '/docs/api/row' }
			]
		}
	];

	const { children } = $props();
</script>

<div class="flex p-2">
	<div class="w-72 min-w-72 px-2">
		{#each items as item}
			{@render SidebarItem_({ label: item.label, items: item.items })}
		{/each}
	</div>

	<div class="grow px-2">
		{@render children()}
	</div>

	<div class="w-72 min-w-72 px-2"></div>
</div>

{#snippet SidebarItem_({ label, items }: SidebarItem)}
	<Collapsible.Root>
		<Collapsible.Trigger>
			{#snippet child({ props })}
				<Button {...props} class="group w-full justify-start font-bold" variant="ghost" size="sm">
					{label}
					<ChevronDown
						class="ml-auto transition-transform group-data-[state=open]:rotate-180"
						size={16}
					/>
				</Button>
			{/snippet}
		</Collapsible.Trigger>
		<Collapsible.Content>
			<div class="flex flex-col gap-0.5">
				{#each items as { label, href }}
					<Button
						{href}
						class={cn('justify-start pl-8', {
							'font-bold text-primary hover:text-primary': href === $page.url.pathname
						})}
						variant="ghost"
						size="sm">{label}</Button
					>
					<!-- variant={href === $page.url.pathname ? 'default' : 'ghost'} -->
				{/each}
			</div>
		</Collapsible.Content>
	</Collapsible.Root>
{/snippet}
