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
				condition: (filterValue, itemValue) => {
					if (typeof itemValue === 'string') {
						return itemValue.toLowerCase().includes(filterValue.toLowerCase());
					}
					return false;
				}
			}
		}
	});
</script>

{#snippet DeleteButton(item: Post)}
	<button
		onclick={() => {
			data.posts = data.posts.filter((post) => post.id !== item.id);
			table.updateData(data.posts);
		}}
	>
		Delete
	</button>
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

{#each Array(table.totalPages) as _, index}
	{@const page = index + 1}
	<button
		onclick={() => {
			table.setPage(page);
		}}
	>
		{page}
	</button>
{/each}

{#snippet Cell(cell: Cell<Post>)}
	{#if cell.columnId === 'action'}
		{@render DeleteButton(cell.item)}
	{:else}
		{cell.value}
	{/if}
{/snippet}
