import type { Filters } from './filter.js';
import type { Pagination } from './pagination.js';
import type { Row } from './row.js';

/**
 * Represents a table structure with headers, rows, and pagination.
 * Provides methods to update data, navigate pages, and set pagination options.
 */
export interface Table<T> {
	/**
	 * The headers of the table.
	 */
	headers: string[];

	/**
	 * Array of rows representing a single item in the table. Each row contains an array of cells.
	 */
	rows: Row<T>[];

	/**
	 * The total number of pages in the table based on the current page size.
	 */
	totalPages: number;

	/**
	 * The current page number.
	 */
	currentPage: number;

	/**
	 * The current page size.
	 */
	currentPageSize: number;

	/**
	 * Updates the data in the table.
	 * @param data The data to update the table with.
	 */
	updateData(data: T[]): void;

	/**
	 * Updates the data in the table using an updater function.
	 * @param updater A function that takes the current data and returns the new data.
	 */
	updateData(updater: (data: T[]) => T[]): void;

	/**
	 * Sets a filter on a column.
	 * @param key The column on which to apply the filter.
	 * @param value The value to filter by.
	 */
	setFilterValue(key: keyof T, value: string): void;

	/**
	 * Sets the number of items to display per page.
	 * @param pageSize The number of items to display per page.
	 */
	setPageSize(pageSize: number): void;

	/**
	 * Sets the current page number.
	 * @param page The page number to set.
	 */
	setPage(page: number): void;

	/**
	 * Moves to the next page.
	 */
	nextPage(): void;

	/**
	 * Moves to the previous page.
	 */
	previousPage(): void;

	/**
	 * Returns true if the current page is the last page.
	 */
	isLastPage(): boolean;

	/**
	 * Returns true if the current page is the first page.
	 */
	isFirstPage(): boolean;
}

/**
 * Options for creating a table.
 */
export type TableOptions<T> = {
	/**
	 * Pagination options.
	 */
	pagination: Pagination;

	/**
	 * Filters to apply to the table.
	 */
	filters?: Filters<T>;
};
