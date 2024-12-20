# SvelteTable

SvelteTable is a flexible and powerful **headless data table solution** for Svelte applications. With its headless architecture, SvelteTable allows you to fully control the markup and styles while offering advanced features like sorting, filtering, pagination, and more.

## Features

- **Headless Architecture**: Bring your own UI components while SvelteTable handles the logic.
- **Sorting & Filtering**: Built-in capabilities with support for custom logic.
- **Pagination**: Effortless pagination with customizable page sizes and navigation.
- **Row Selection**: Flexible support for single and multi-row selection.
- **Accessibility**: Built with WAI-ARIA guidelines in mind.
- **TypeScript Support**: Fully typed for a seamless development experience.

## Installation

Install SvelteTable via npm:

```bash
npm install @geodask/svelte-table
```

or using yarn:

```bash
yarn add @geodask/svelte-table
```

or pnpm:

```bash
pnpm add @geodask/svelte-table
```

## Getting Started

Here’s how to set up a simple table:

```svelte
<script lang="ts">
	import { createTable } from '@geodask/svelte-table';

	const data = [
		{ id: 1, name: 'Alice', age: 25 },
		{ id: 2, name: 'Bob', age: 30 }
	];

	const columns = [
		{ id: 'id', header: 'ID', accessorKey: 'id' },
		{ id: 'name', header: 'Name', accessorKey: 'name' },
		{ id: 'age', header: 'Age', accessorKey: 'age' }
	];

	const table = createTable(data, columns, {
		pagination: { pageSize: 5, page: 1 }
	});
</script>

<table>
	<thead>
		<tr>
			{#each table.headers as header}
				<th>{header.label}</th>
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
```

## Documentation

Explore the [official documentation](https://your-docs-site-link.com) to learn more about:

- Core Concepts
- Pagination
- Filtering
- API Reference

## Examples

Check out the [Examples](https://your-examples-link.com) to see SvelteTable in action and get inspired.

## Contributing

We welcome contributions from the community! To get started:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push your branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

Check the [contribution guidelines](https://your-contribution-guidelines-link.com) for more information.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.