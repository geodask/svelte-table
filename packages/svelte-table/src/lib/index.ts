import { TableDef, type Cell, type Column, type Row, type Table } from './table.svelte.js';

export function createTable<T>(data: T[], columns: Column<T>[]): Table<T> {
	return new TableDef(data, columns);
}

export type { Cell, Column, Row, Table };
