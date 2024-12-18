import type { AccessorKey } from "./column.js";

export type ColumnFilterCondition<T, K extends AccessorKey<T> = AccessorKey<T>> = (filterValue: T[K] | undefined, itemValue: T[K]) => boolean
export type GlobalFilterCondition<T, V> = (filterValue: V | undefined, itemValue: T) => boolean

export type ColumnFiltersOptions<T> = {
	[K in keyof T]?: {
		initialValue?: T[K] | Array<T[K]>;
		condition?: ColumnFilterCondition<T, K>;
	}
};

export type ColumnFilter<T, K extends AccessorKey<T> = AccessorKey<T>> = {
	value: T[K] | Array<T[K]> | undefined;
	condition: ColumnFilterCondition<T> | undefined;
}

export type GlobalFilterOptions<T, V = unknown> = {
	initialValue?: V;
	condition?: GlobalFilterCondition<T, V>;
}

export type GlobalFilter<T, V = unknown> = {
	value: V | undefined;
	condition: GlobalFilterCondition<T, V> | undefined;
}