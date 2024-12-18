import { Filters } from './filters.svelte.js';
import { PaginationDef } from './pagination.svelte.js';
import type { Cell } from './types/cell.js';
import type { AccessorKey, Column } from './types/column.js';
import type { ColumnFiltersOptions, GlobalFilterOptions } from './types/filter.js';
import type { Row } from './types/row.js';
import type { Table, TableOptions } from './types/table.js';

export class TableDef<T extends Record<string, unknown>> implements Table<T> {
	#pagination = new PaginationDef<T>();
	#filters = new Filters<T>();

	#data = $state<T[]>([]);
	#columns = $state<Column<T>[]>([]);

	#filteredData = $derived(this.#filters.filter(this.#data));
	#paginatedData = $derived(this.#pagination.paginate(this.#filteredData));

	#totalItems = $derived(this.#data.length);
	#totalPages = $derived(this.#pagination.calculateTotalPages(this.#filteredData));

	headers = $derived(this.generateHeaders());
	rows = $derived(this.generateRows());

	constructor(data: T[], columns: Column<T>[], options: TableOptions<T>) {
		this.#data = data;
		this.#columns = columns;

		$effect.root(() => {
			if (this.#filters.changed) {
				this.setPage(1);
				this.#filters.confirmChange();
			}
			return () => {
				this.#filters.confirmChange();
			}
		})

		this.initializeFilters(options.columnFilters);
		this.initializeGlobalFilter(options.globalFilter);
		this.initializePagination(options.pagination.pageSize, options.pagination.page);
	}

	get totalItems() {
		return this.#totalItems;
	}

	get currentPage() {
		return this.#pagination.currentPage;
	}

	get currentPageSize() {
		return this.#pagination.pageSize;
	}

	get isOnLastPage() {
		return this.#pagination.currentPage === this.#totalPages;
	}

	get isOnFirstPage() {
		return this.#pagination.currentPage === 1;
	}

	get totalPages() {
		return this.#totalPages;
	}

	updateData(dataOrUpdater: T[] | ((data: T[]) => T[])) {
		if (typeof dataOrUpdater === 'function') {
			this.#data = dataOrUpdater(this.#data);
		} else {
			this.#data = dataOrUpdater;
		}
	}

	setFilterValue<K extends AccessorKey<T>>(key: K, value: T[K]) {
		this.#filters.setColumnFilterValue(key, value);
	}

	setPageSize(pageSize: number) {
		this.#pagination.setPageSize(pageSize);
	}

	setPage(page: number) {
		this.#pagination.setPage(page);
	}

	nextPage() {
		this.#pagination.nextPage();
	}

	previousPage() {
		this.#pagination.previousPage();
	}

	private initializePagination(pageSize: number, page: number) {
		this.#pagination.setPageSize(pageSize);
		this.#pagination.setPage(page);
	}

	private initializeFilters(filters: ColumnFiltersOptions<T> | undefined) {
		for (const key in filters) {
			const typeSafeKey = key as AccessorKey<T>;
			this.#filters.setColumnFilter(key, {
				condition: filters[typeSafeKey]?.condition,
				value: filters[key]?.initialValue
			})
		}
	}

	private initializeGlobalFilter(filter: GlobalFilterOptions<T> | undefined) {
		this.#filters.setGlobalFilterValue(filter?.initialValue);
		this.#filters.setGlobalFilterCondition(filter?.condition);
	}

	private generateHeaders() {
		return this.#columns.map((column) => this.mapHeader(column));
	}

	private generateRows() {
		return this.#paginatedData.map((item) => this.mapRow(item));
	}

	private mapHeader(column: Column<T>): string {
		return column.label;
	}

	private mapRow(item: T): Row<T> {
		return {
			cells: this.#columns.map((column) => this.mapCell(column, item))
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
