import type { Cell } from './types/cell.js';
import type { Column } from './types/column.js';
import type { Filter, Filters } from './types/filter.js';
import type { Pagination } from './types/pagination.js';
import type { Row } from './types/row.js';
import type { Table, TableOptions } from './types/table.js';

export class TableDef<T> implements Table<T> {
	private data = $state<T[]>([]);
	private pagination = $state<Pagination>({ pageSize: 10, page: 1 });
	private columns = $state<Column<T>[]>([]);
	private filters = $state<Filters<T>>({});

	private filteredData = $derived(this.generateFilteredData());
	private paginatedData = $derived(this.generatePaginatedData());

	headers = $derived(this.generateHeaders());
	rows = $derived(this.generateRows());

	totalPages = $derived(this.generateTotalPages());
	currentPage = $derived(this.pagination.page);
	currentPageSize = $derived(this.pagination.pageSize);

	constructor(data: T[], columns: Column<T>[], options: TableOptions<T>) {
		this.data = data;
		this.columns = columns;
		this.pagination = options.pagination;
		this.filters = options.filters ? options.filters : {};
	}

	updateData(dataOrUpdater: T[] | ((data: T[]) => T[])) {
		if (typeof dataOrUpdater === 'function') {
			this.data = dataOrUpdater(this.data);
		} else {
			this.data = dataOrUpdater;
		}
	}

	setFilterValue(key: keyof T, value: string) {
		// if key is not in filters, create a new filter
		if (!this.filters[key]) {
			this.filters[key] = { value: value };
		} else {
			if (this.filters[key]) {
				this.filters[key].value = value;
			}
		}
	}

	setPageSize(pageSize: number) {
		this.pagination.pageSize = pageSize;
	}

	setPage(page: number) {
		this.pagination.page = page;
	}

	nextPage() {
		if (this.pagination.page < this.totalPages) {
			this.pagination.page++;
		}
	}

	previousPage() {
		if (this.pagination.page > 1) {
			this.pagination.page--;
		}
	}

	isLastPage() {
		return this.pagination.page === this.totalPages;
	}

	isFirstPage() {
		return this.pagination.page === 1;
	}

	private generateTotalPages() {
		return Math.ceil(this.filteredData.length / this.pagination.pageSize);
	}

	private generateFilteredData() {
		if (this.filters) {
			const filters = this.filters;
			const filteredData = this.data.filter((item) => {
				return Object.entries(filters as { [s: string]: Filter<T> }).every(([key, filter]) => {
					const itemValue = item[key as keyof T];
					const filterValue = filter.value;
					const filterCondition = filter.condition;
					if (filterValue && filterCondition) {
						return filterCondition(filterValue, item);
					} else if (filterValue && !filterCondition) {
						return String(itemValue).includes(filterValue);
					} else {
						return true;
					}
				});
			});
			return filteredData;
		} else {
			return this.data;
		}
	}

	private generatePaginatedData() {
		const start = (this.pagination.page - 1) * this.pagination.pageSize;
		const end = start + this.pagination.pageSize;
		return this.filteredData.slice(start, end);
	}

	private generateHeaders() {
		return this.columns.map((column) => this.mapHeader(column));
	}

	private generateRows() {
		return this.paginatedData.map((item) => this.mapRow(item));
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
