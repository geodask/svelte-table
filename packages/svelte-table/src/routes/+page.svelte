<script lang="ts">
	import { createTable, type Column } from '$lib/index.js';
	import type { Post } from './+page.js';

	const { data } = $props();

	const posts = $state(data.posts);

	const columns: Column<Post>[] = $state([
		{ key: 'id', label: 'ID' },
		{ key: 'title', label: 'Title' },
		{ key: 'body', label: 'Body' }
	]);

	const table = createTable(posts, columns);
</script>

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
					<td>{cell.value}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
