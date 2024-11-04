export type Column<T> = {
	key: keyof T;
	label: string;
};

export type Row<T> = {
	cells: Cell<T>[];
};

export type Cell<T> = {
	value: T[keyof T];
};

export type CreateTableOptions<T> = {
	columns: Column<T>[];
};

export interface Table<T> {
	data: T[];
	columns: Column<T>[];
	headers: string[];
	rows: Row<T>[];

	setColumns(columns: Column<T>[]): void;

	updateData(updater: (data: T[]) => T[] | T[]): void;
}

export class TableDef<T> implements Table<T> {
	data = $state<T[]>([]);
	columns = $state<Column<T>[]>([]);

	headers = $derived(this.generateHeaders());
	rows = $derived(this.generateRows());

	constructor(initialData: T[], initialColumns: Column<T>[]) {
		this.data = initialData;
		this.columns = initialColumns;
	}

	setColumns(columns: Column<T>[]) {
		this.columns = columns;
	}

	updateData(updater: (data: T[]) => T[] | T[]) {
		if (typeof updater === 'function') {
			this.data = updater(this.data);
		} else {
			this.data = updater;
		}
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
			value: item[column.key]
		};
	}
}
