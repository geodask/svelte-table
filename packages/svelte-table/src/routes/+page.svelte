<script lang="ts">
	import { createTable, type Column } from '$lib/index.js';

	// Define your user type
	type User = {
		id: number;
		name: string;
	};

	// Create initial data and columns
	const initialData: User[] = [
		{ id: 1, name: 'John' },
		{ id: 2, name: 'Jane' }
	];

	const initialColumns: Column<User>[] = [
		{ key: 'id', label: 'ID' },
		{ key: 'name', label: 'Name' }
	];

	// Use the state management from table.svelte.ts
	const table = createTable<User>(initialData, initialColumns);

	function onClick() {
		table.updateData((data) => {
			return [...data, { id: data.length + 1, name: 'New user' }];
		});
	}
</script>

<!-- Table markup -->
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

<button onclick={onClick}>Add item</button>
