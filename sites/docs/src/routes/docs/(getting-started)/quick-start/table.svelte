<script lang="ts">
	import { createTable, type Column } from '@local/svelte-table';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Table from '$lib/components/ui/table';
	import Button from '$lib/components/ui/button/button.svelte';
	import { cn } from '$lib/utils';

	type Post = {
		id: number;
		title: string;
		body: string;
	};

	const posts: Post[] = [
		{ id: 1, title: 'First Post', body: 'This is the body of the first post.' },
		{ id: 2, title: 'Second Post', body: 'This is the body of the second post.' },
		{ id: 3, title: 'Third Post', body: 'This is the body of the third post.' },
		{ id: 4, title: 'Fourth Post', body: 'This is the body of the fourth post.' },
		{ id: 5, title: 'Fifth Post', body: 'This is the body of the fifth post.' }
	];

	const columns: Column<Post>[] = [
		{ accessorKey: 'id', label: 'ID', id: 'id' },
		{ accessorKey: 'title', label: 'Title', id: 'title' },
		{ accessorKey: 'body', label: 'Body', id: 'body' },
		{ id: 'action', label: '' }
	];

	const table = createTable(posts, columns, {
		pagination: {
			page: 1,
			pageSize: 5
		}
	});
</script>

<Table.Root>
	<Table.Header>
		<Table.Row>
			{#each table.headers as header}
				<Table.Head
					class={cn({
						'w-[100px]': header === 'ID'
					})}>{header}</Table.Head
				>
			{/each}
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each table.rows as row}
			<Table.Row>
				{#each row.cells as cell}
					<Table.Cell>
						{#if cell.columnId === 'action'}
							<DropdownMenu.Root>
								<DropdownMenu.Trigger>
									{#snippet child({ props })}
										<Button {...props} variant="outline">Action</Button>
									{/snippet}
								</DropdownMenu.Trigger>
								<DropdownMenu.Content preventScroll={false}>
									<DropdownMenu.Item>Edit</DropdownMenu.Item>
									<DropdownMenu.Item>Delete</DropdownMenu.Item>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
						{:else}
							{cell.value}
						{/if}
					</Table.Cell>
				{/each}
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
