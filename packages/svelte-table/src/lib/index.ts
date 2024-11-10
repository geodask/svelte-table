import { TableDef } from './table.svelte.js';
import type { Cell } from './types/cell.js';
import type { Column } from './types/column.js';
import type { Pagination } from './types/pagination.js';
import type { Row } from './types/row.js';
import type { TableOptions, Table } from './types/table.js';

/**
 * Creates a new table object
 * @param data The raw data to be displayed in the table
 * @param columns The structure of the table that decides how and what will be displayed
 * @param options The options for the table
 * @returns A table object containing reactive properties and methods to interact with the table
 */
export function createTable<T>(data: T[], columns: Column<T>[], options: TableOptions<T>): Table<T> {
	return new TableDef(data, columns, options);
}

export type { Cell, Column, Row, Table, TableOptions, Pagination };
