import { TableDef } from './table.svelte.js';
import type { Cell } from './types/cell.js';
import type { Column } from './types/column.js';
import type { Pagination } from './types/pagination.js';
import type { Row } from './types/row.js';
import type { TableOptions, Table } from './types/table.js';

export function createTable<T>(data: T[], columns: Column<T>[], options: TableOptions): Table<T> {
	return new TableDef(data, columns, options);
}

export type { Cell, Column, Row, Table, TableOptions, Pagination };
