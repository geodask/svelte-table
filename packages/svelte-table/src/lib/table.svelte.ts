export type Column<T> = {
	key: keyof T;
	label: string;
	formatter?: (value: T[keyof T]) => string;
};

export type Row = {
	cells: Cell[];
};

export type Cell = {
	value: string;
};

export type CreateTableOptions<T> = {
	columns: Column<T>[];
};

export interface Table<T> {
	data: T[];
	columns: Column<T>[];
	headers: string[];
	rows: Row[];
}

export class TableDef<T> implements Table<T> {
	data = $state<T[]>([]);
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

	private mapRow(item: T): Row {
		return {
			cells: this.columns.map((column) => this.mapCell(column, item))
		};
	}

	private mapCell(column: Column<T>, item: T): Cell {
		return {
			value: column.formatter ? column.formatter(item[column.key]) : String(item[column.key])
		};
	}
}
