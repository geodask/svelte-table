import { describe, expect, it } from "vitest";
import { PaginationDef } from "./pagination.svelte.js";

describe("Pagination", () => {

  it("should initialize pagination class correctly", () => {
    const pagination = new PaginationDef(10, 1);
    expect(pagination).toBeDefined();
    expect(pagination.pageSize).toBe(10);
    expect(pagination.currentPage).toBe(1);
  });

  it("should set page size correctly", () => {
    const pagination = new PaginationDef(10, 1);
    pagination.setPageSize(20);
    expect(pagination.pageSize).toBe(20);
  });

  it("should set page correctly", () => {
    const pagination = new PaginationDef(10, 1);
    pagination.setPage(2);
    expect(pagination.currentPage).toBe(2);
  });

  it("should increment page correctly", () => {
    const pagination = new PaginationDef(10, 1);
    pagination.nextPage();
    expect(pagination.currentPage).toBe(2);
  });

  it("should decrement page correctly", () => {
    const pagination = new PaginationDef(10, 2);
    pagination.previousPage();
    expect(pagination.currentPage).toBe(1);
  });

  it("should paginate data correctly", () => {
    const pagination = new PaginationDef(2, 1);
    const data = [1, 2, 3, 4, 5];
    const paginatedData = pagination.paginate(data);
    expect(paginatedData).toEqual([1, 2]);
  });

  it("should calculate total pages correctly", () => {
    const pagination = new PaginationDef(2, 1);
    const data = [1, 2, 3, 4, 5];
    const totalPages = pagination.calculateTotalPages(data);
    expect(totalPages).toBe(3);
  });
})