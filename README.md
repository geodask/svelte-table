<div style="text-align:center">
  <img src="sites/docs/static/logo.svg#gh-light-mode-only" width="80">
  <img src="sites/docs/static/logo-dark.svg#gh-dark-mode-only" width="80">
</div>

# Svelte Table

**Svelte Table** is a lightweight, headless table library for [Svelte](https://svelte.dev/) that simplifies creating dynamic tables. Whether you're displaying simple data sets or building complex data grids, Svelte Table provides all the essential features like sorting, filtering, and pagination, while giving you full control over the table's look and feel.

## Features

- **Lightweight & Headless**: No built-in styles—complete flexibility to customize the table’s appearance.
- **Sorting, Filtering, Pagination**: Core features to build interactive tables with minimal setup.
- **Simple API**: Intuitive and easy-to-use, so you can focus on your data instead of configuration.

## Installation

Install Svelte Table using npm:

```bash
npm install svelte-table
```

## Basic Usage

Here’s a basic example of how to use Svelte Table:

```svelte
<script lang="ts">
  import { createTable, Column } from 'svelte-table';

  type User = {
    id: number;
    name: string;
    email: string;
  };

  const data: User[] = [
    {
      id: 1,
      name: 'Alice',
      email: 'alice@example.com'
    },
    {
      id: 2,
      name: 'Bob',
      email: 'bob@example.com'
    }
  ];

  const columns: Column<User>[] = [
    {
      key: 'id',
      label: 'User ID'
    },
    {
      key: 'name',
      label: 'Name'
    },
    {
      key: 'email',
      label: 'Email'
    }
  ];

  const table = createTable(data, { columns });
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
```
