import { SvelteMap } from "svelte/reactivity";
import type { AccessorKey } from "./types/column.js";
import { type ColumnFilter, type ColumnFilterCondition, type GlobalFilter, type GlobalFilterCondition } from "./types/filter.js";

export class Filters<T = Record<string, unknown>, V = unknown> {
  #columnFilters = new SvelteMap<AccessorKey<T>, ColumnFilter<T>>();
  #globalFilter = $state<GlobalFilter<T, V>>();
  #changed = $state(false);

  get changed() {
    return this.#changed;
  }

  filter(data: T[]) {
    return this.applyGlobalFilter(this.applyColumnFilters(data));
  }

  setGlobalFilterValue(value: V | undefined) {
    if (this.#globalFilter) {
      this.#globalFilter = {
        ...this.#globalFilter,
        value,
      }
    }
    else {
      this.#globalFilter = {
        value,
        condition: undefined,
      }
    }
    this.#changed = true;
  }

  setGlobalFilterCondition(condition: GlobalFilterCondition<T, V> | undefined) {
    if (this.#globalFilter) {
      this.#globalFilter = {
        ...this.#globalFilter,
        condition,
      }
    }
    else {
      this.#globalFilter = {
        value: undefined,
        condition,
      }
    }
  }

  setColumnFilter(key: AccessorKey<T>, columnFilter: ColumnFilter<T>) {
    this.#columnFilters.set(key, columnFilter);
    this.#changed = true;
  }

  setColumnFilterValue<K extends AccessorKey<T>>(key: K, filterValue: T[K]) {
    const columnFilter = this.#columnFilters.get(key);
    if (columnFilter) {
      this.#columnFilters.set(key, { ...columnFilter, value: filterValue });
    } else {
      this.#columnFilters.set(key, { value: filterValue, condition: undefined });
    }
    this.#changed = true;
  }

  setColumnFilterCondition(key: AccessorKey<T>, condition: ColumnFilterCondition<T>) {
    const columnFilter = this.#columnFilters.get(key);
    if (columnFilter) {
      this.#columnFilters.set(key, { ...columnFilter, condition });
    } else {
      this.#columnFilters.set(key, { value: undefined, condition });
    }
    this.#changed = true;
  }

  confirmChange() {
    this.#changed = false;
  }

  private applyColumnFilters(data: T[]) {
    if (this.#columnFilters.size === 0) return data;
    return data.filter(item => this.itemMatchesFilters(item));
  }

  private itemMatchesFilters(item: T) {
    for (const [key, columnFilter] of this.#columnFilters) {
      return this.itemMatchesFilter(item, key, columnFilter);
    }
    return true;
  }

  private itemMatchesFilter(item: T, key: keyof T, columnFilter: ColumnFilter<T>) {
    const itemValue = item[key];
    const filterValue = columnFilter.value;
    const condition = columnFilter.condition;
    if (condition) {
      if (Array.isArray(filterValue)) {
        return filterValue.some(value => condition(value, itemValue));
      } else {
        return condition(filterValue, itemValue);
      }
    }
    return true;
  }

  private applyGlobalFilter(data: T[]) {
    if (this.#globalFilter) {
      const condition = this.#globalFilter?.condition;
      if (condition) {
        const filterValue = this.#globalFilter?.value;
        return data.filter(item => condition(filterValue, item));
      }
      return data;
    }
    return data;
  }
}