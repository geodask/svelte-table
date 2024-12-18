export class PaginationDef<T> {
  #pageSize = $state(0);
  #page = $state(0);

  constructor(initialPageSize: number = 10, initialPage: number = 1) {
    this.#pageSize = initialPageSize;
    this.#page = initialPage;
  }

  setPageSize(pageSize: number) {
    this.#pageSize = pageSize;
    this.#page = 1;
  }

  setPage(page: number) {
    this.#page = page;
  }

  nextPage() {
    this.#page++;
  }

  previousPage() {
    this.#page--;
  }

  paginate(data: T[]): T[] {
    const start = (this.#page - 1) * this.#pageSize;
    const end = start + this.#pageSize;
    return data.slice(start, end);
  }

  calculateTotalPages(data: T[]) {
    return Math.ceil(data.length / this.#pageSize);
  }

  get currentPage() {
    return this.#page;
  }
  get pageSize() {
    return this.#pageSize;
  }
}
