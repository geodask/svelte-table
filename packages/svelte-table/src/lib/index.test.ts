import { describe, expect, it } from 'vitest';
import { createTable, type Column } from './index.js';

type User = {
	id: number;
	name: string;
	age: number;
};

describe('Table', () => {
	it('should initialize a table correctly', () => {
		const data: User[] = [
			{ id: 1, name: 'John Doe', age: 25 },
			{ id: 2, name: 'Jane Doe', age: 24 },
			{ id: 3, name: 'John Smith', age: 30 }
		];

		const columns: Column<User>[] = [
			{ id: 'id', accessorKey: 'id', label: 'ID' },
			{ id: 'name', accessorKey: 'name', label: 'Name' },
			{ id: 'age', accessorKey: 'age', label: 'Age' }
		];

		const table = createTable(data, columns, { pagination: { pageSize: 10, page: 1 } });

		expect(table).toBeDefined();
		expect(table.headers).toEqual(['ID', 'Name', 'Age']);
		expect(table.rows).toHaveLength(3);

		table.rows.forEach((row, rowIndex) => {
			expect(row.cells).toHaveLength(3);
			columns.forEach((column, colIndex) => {
				expect(row.cells[colIndex]).toEqual({
					columnId: column.id,
					item: data[rowIndex],
					value: String(data[rowIndex][column.accessorKey as keyof User])
				});
			});
		});
	});

	it('should handle columns without accessorKey', () => {
		const data: User[] = [
			{ id: 1, name: 'John Doe', age: 25 },
			{ id: 2, name: 'Jane Doe', age: 24 },
			{ id: 3, name: 'John Smith', age: 30 }
		];

		const columns: Column<User>[] = [
			{ id: 'id', label: 'ID' },
			{ id: 'name', label: 'Name' },
			{ id: 'age', label: 'Age' }
		];

		const table = createTable(data, columns, { pagination: { pageSize: 10, page: 1 } });

		expect(table).toBeDefined();
		expect(table.headers).toEqual(['ID', 'Name', 'Age']);
		expect(table.rows).toHaveLength(3);

		table.rows.forEach((row, rowIndex) => {
			expect(row.cells).toHaveLength(3);
			columns.forEach((column, colIndex) => {
				expect(row.cells[colIndex]).toEqual({
					columnId: column.id,
					item: data[rowIndex],
					value: ''
				});
			});
		});
	});

	it('should handle pagination correctly', () => {
		const data: User[] = [
			{ id: 1, name: 'John Doe', age: 25 },
			{ id: 2, name: 'Jane Doe', age: 24 },
			{ id: 3, name: 'John Smith', age: 30 },
			{ id: 4, name: 'Jane Smith', age: 28 },
			{ id: 5, name: 'John Johnson', age: 35 }
		];

		const columns: Column<User>[] = [
			{ id: 'id', accessorKey: 'id', label: 'ID' },
			{ id: 'name', accessorKey: 'name', label: 'Name' },
			{ id: 'age', accessorKey: 'age', label: 'Age' }
		];

		const table = createTable(data, columns, { pagination: { pageSize: 2, page: 1 } });

		expect(table).toBeDefined();
		expect(table.headers).toEqual(['ID', 'Name', 'Age']);
		expect(table.rows).toHaveLength(2);

		table.rows.forEach((row, rowIndex) => {
			expect(row.cells).toHaveLength(3);
			columns.forEach((column, colIndex) => {
				expect(row.cells[colIndex]).toEqual({
					columnId: column.id,
					item: data[rowIndex],
					value: String(data[rowIndex][column.accessorKey as keyof User])
				});
			});
		});

		// Change to the second page
		table.setPage(2);
		expect(table.rows).toHaveLength(2);

		table.rows.forEach((row, rowIndex) => {
			expect(row.cells).toHaveLength(3);
			columns.forEach((column, colIndex) => {
				expect(row.cells[colIndex]).toEqual({
					columnId: column.id,
					item: data[rowIndex + 2],
					value: String(data[rowIndex + 2][column.accessorKey as keyof User])
				});
			});
		});

		// Change to the third page
		table.setPage(3);
		expect(table.rows).toHaveLength(1);

		table.rows.forEach((row, rowIndex) => {
			expect(row.cells).toHaveLength(3);
			columns.forEach((column, colIndex) => {
				expect(row.cells[colIndex]).toEqual({
					columnId: column.id,
					item: data[rowIndex + 4],
					value: String(data[rowIndex + 4][column.accessorKey as keyof User])
				});
			});
		});
	});

	it('should handle setFilterValue correctly', () => {
		const data: User[] = [
			{ id: 1, name: 'John Doe', age: 25 },
			{ id: 2, name: 'Jane Doe', age: 24 },
			{ id: 3, name: 'John Smith', age: 30 },
			{ id: 4, name: 'Jane Smith', age: 28 },
			{ id: 5, name: 'John Johnson', age: 35 }
		];

		const columns: Column<User>[] = [
			{ id: 'id', accessorKey: 'id', label: 'ID' },
			{ id: 'name', accessorKey: 'name', label: 'Name' },
			{ id: 'age', accessorKey: 'age', label: 'Age' }
		];

		const table = createTable(data, columns, {
			pagination: { pageSize: 10, page: 1 }
		});

		expect(table).toBeDefined();
		expect(table.headers).toEqual(['ID', 'Name', 'Age']);
		expect(table.rows).toHaveLength(5);

		table.setFilterValue('name', 'John');
		expect(table.rows).toHaveLength(3);

		table.rows.forEach((row, rowIndex) => {
			expect(row.cells).toHaveLength(3);
			columns.forEach((column, colIndex) => {
				expect(row.cells[colIndex]).toEqual({
					columnId: column.id,
					item: data.filter((user) => user.name.includes('John'))[rowIndex],
					value: String(
						data.filter((user) => user.name.includes('John'))[rowIndex][
							column.accessorKey as keyof User
						]
					)
				});
			});
		});
	});

	it('should handle setFilterValue with custom condition correctly', () => {
		const data: User[] = [
			{ id: 1, name: 'John Doe', age: 25 },
			{ id: 2, name: 'Jane Doe', age: 24 },
			{ id: 3, name: 'John Smith', age: 30 },
			{ id: 4, name: 'Jane Smith', age: 28 },
			{ id: 5, name: 'John Johnson', age: 35 },
			{ id: 6, name: 'John Peterson', age: 20 }
		];

		const columns: Column<User>[] = [
			{ id: 'id', accessorKey: 'id', label: 'ID' },
			{ id: 'name', accessorKey: 'name', label: 'Name' },
			{ id: 'age', accessorKey: 'age', label: 'Age' }
		];

		const table = createTable(data, columns, {
			pagination: { pageSize: 10, page: 1 },
			filters: {
				age: {
					condition: (filterValue, item) => item.age >= Number(filterValue)
				}
			}
		});

		expect(table).toBeDefined();
		expect(table.headers).toEqual(['ID', 'Name', 'Age']);
		expect(table.rows).toHaveLength(6);

		table.setFilterValue('age', '30');
		expect(table.rows).toHaveLength(2);

		table.rows.forEach((row, rowIndex) => {
			expect(row.cells).toHaveLength(3);
			columns.forEach((column, colIndex) => {
				expect(row.cells[colIndex]).toEqual({
					columnId: column.id,
					item: data.filter((user) => user.age >= 30)[rowIndex],
					value: String(
						data.filter((user) => user.age >= 30)[rowIndex][column.accessorKey as keyof User]
					)
				});
			});
		});
	});
});
