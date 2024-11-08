<script lang="ts">
	import { createTable, type Cell, type Column } from '$lib/index.js';
	import type { Post } from './+page.js';

	const { data } = $props();

	const posts = $state(data.posts);

	const columns = $state<Column<Post>[]>([
		{ id: 'id', accessorKey: 'id', label: 'ID' },
		{ id: 'title', accessorKey: 'title', label: 'Title' },
		{ id: 'action', label: 'Body' }
	]);

	const table = createTable(posts, columns);
</script>

{#snippet Action(item: Post)}
	<button>Post {item.id}</button>
{/snippet}

<table>
	<thead>
		<tr>
			{#each table.headers as header}
				<th>{header}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each table.rows as row}
			<tr>
				{#each row.cells as cell}
					<td>
						{@render Cell(cell)}
					</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

{#snippet Cell(cell: Cell<Post>)}
	{#if cell.columnId === 'action'}
		{@render Action(cell.item)}
	{:else}
		{cell.value}
	{/if}
{/snippet}
