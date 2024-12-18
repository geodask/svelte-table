<script lang="ts">
	import { page } from '$app/state';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import { cn } from '$lib/utils';

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
			label: 'Docs',
			items: [
				{ label: 'Introduction', href: '/docs/introduction' },
				{ label: 'Getting Started', href: '/docs/getting-started' }
			]
		},
		{
			label: 'Guide',
			items: [
				{ label: 'Core Concepts', href: '/docs/core-concepts' },
				{ label: 'Pagination', href: '/docs/pagination' },
				{ label: 'Filters', href: '/docs/filters' }
			]
		},
		{
			label: 'API Reference',
			items: [{ label: 'Table', href: '/docs/api/table' }]
		}
	];
</script>

<Sidebar.Root>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton size="lg">
					{#snippet child({ props })}
						<a href="/" {...props}> @geodask/svelte-table </a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content>
		{#each items as item (item.label)}
			<Sidebar.Group>
				<Sidebar.GroupLabel>{item.label}</Sidebar.GroupLabel>
				<Sidebar.GroupContent>
					<Sidebar.Menu>
						{#each item.items as navigationItem (navigationItem.label)}
							<Sidebar.MenuItem>
								<Sidebar.MenuButton isActive={page.url.pathname === navigationItem.href}>
									{#snippet child({ props })}
										<a href={navigationItem.href} {...props}>
											{navigationItem.label}
										</a>
									{/snippet}
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
						{/each}
					</Sidebar.Menu>
				</Sidebar.GroupContent>
			</Sidebar.Group>
		{/each}
	</Sidebar.Content>
</Sidebar.Root>
