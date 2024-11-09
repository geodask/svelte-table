import type { Cell } from './types/cell.js';
import type { Column } from './types/column.js';
import type { Pagination } from './types/pagination.js';
import type { Row } from './types/row.js';
import type { Table, TableOptions } from './types/table.js';

export class TableDef<T> implements Table<T> {
	private data = $state<T[]>([]);
	private pagination = $state<Pagination>({ pageSize: 10, page: 1 });
	private columns = $state<Column<T>[]>([]);

	private paginatedData = $derived(this.generatePaginatedData());

	headers = $derived(this.generateHeaders());
	rows = $derived(this.generateRows());

	totalPages = $derived(this.generateTotalPages());
	currentPage = $derived(this.pagination.page);
	currentPageSize = $derived(this.pagination.pageSize);

	constructor(data: T[], columns: Column<T>[], options: TableOptions) {
		this.data = data;
		this.columns = columns;
		this.pagination = options.pagination;
	}

	updateData(dataOrUpdater: T[] | ((data: T[]) => T[])) {
		if (typeof dataOrUpdater === 'function') {
			this.data = dataOrUpdater(this.data);
		} else {
			this.data = dataOrUpdater;
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
		return Math.ceil(this.data.length / this.pagination.pageSize);
	}

	private generatePaginatedData() {
		const start = (this.pagination.page - 1) * this.pagination.pageSize;
		const end = start + this.pagination.pageSize;
		return this.data.slice(start, end);
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
