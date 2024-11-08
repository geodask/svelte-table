import { type Snippet } from 'svelte';

export type Column<T> = {
	id: string;
	accessorKey?: keyof T;
	label: string;
	snippet?: Snippet<[T]>;
};

export type Row<T> = {
	cells: Cell<T>[];
};

export type Cell<T> = {
	columnId: string;
	item: T;
	value: string;
};

export type CreateTableOptions<T> = {
	columns: Column<T>[];
};

export interface Table<T> {
	columns: Column<T>[];
	headers: string[];
	rows: Row<T>[];
}

export class TableDef<T> implements Table<T> {
	private data = $state<T[]>([]);
	columns = $state<Column<T>[]>([]);

	headers = $derived(this.generateHeaders());
	rows = $derived(this.generateRows());

	constructor(data: T[], columns: Column<T>[]) {
		this.data = data;
		this.columns = columns;
	}

	private generateHeaders() {
		return this.columns.map((column) => this.mapHeader(column));
	}

	private generateRows() {
		return this.data.map((item) => this.mapRow(item));
	}

	private mapHeader(column: Column<T>): string {
		return column.label;
	}

	private mapRow(item: T): Row<T> {
		return {
			cells: this.columns.map((column) => this.mapCell(column, item))
		};
	}

	private mapCell(column: Column<T>, item: T): Cell<T> {
		return {
			columnId: column.id,
			item: item,
			value: column?.accessorKey ? String(item[column.accessorKey]) : ''
		};
	}
}
