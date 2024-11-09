<script lang="ts">
	import { createTable, type Cell, type Column } from '$lib/index.js';
	import type { Post } from './+page.js';

	const { data } = $props();

	const columns: Column<Post>[] = [
		{ id: 'id', accessorKey: 'id', label: 'ID' },
		{ id: 'title', accessorKey: 'title', label: 'Title' },
		{ id: 'action', label: 'Body' }
	];

	const table = createTable(data.posts, columns, {
		pagination: {
			pageSize: 2,
			page: 1
		},
		filters: {
			title: {
				value: '',
				condition: (value, item) => {
					const lastWord = item.title.split(' ').pop();
					return lastWord === value;
				}
			}
		}
	});
</script>

{#snippet Action(item: Post)}
	<button>Post {item.id}</button>
{/snippet}

<button disabled={table.isFirstPage()} onclick={() => table.previousPage()}> Previous page </button>
<button disabled={table.isLastPage()} onclick={() => table.nextPage()}> Next page </button>

<select
	onchange={(event) => {
		const value = parseInt(event.currentTarget.value);
		console.log(value);
		table.setPageSize(value);
	}}
>
	<option selected={table.currentPageSize === 1} value="1">1</option>
	<option selected={table.currentPageSize === 5} value="5">5</option>
	<option selected={table.currentPageSize === 10} value="10">10</option>
	<option selected={table.currentPageSize === 20} value="20">20</option>
	<option selected={table.currentPageSize === 30} value="30">30</option>
</select>

<input
	type="text"
	oninput={(event) => {
		table.setFilterValue('title', event.currentTarget.value);
	}}
/>

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

{#each Array(table.totalPages) as page, index}
	<button
		onclick={() => {
			table.setPage(index + 1);
		}}
		>{index + 1}
	</button>
{/each}

{#snippet Cell(cell: Cell<Post>)}
	{#if cell.columnId === 'action'}
		{@render Action(cell.item)}
	{:else}
		{cell.value}
	{/if}
{/snippet}
