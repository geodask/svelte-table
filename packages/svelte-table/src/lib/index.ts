import { TableDef, type Cell, type Column, type Row, type Table } from './table.svelte.js';

export function createTable<T>(initialData: T[], columns: Column<T>[]) {
	return new TableDef(initialData, columns);
}

export type { Cell, Column, Row, Table };
