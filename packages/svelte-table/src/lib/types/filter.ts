export type Filter<T> = {
	value?: string;
	condition?: (filterValue: string, itemValue: T[keyof T]) => boolean;
};

export type Filters<T> = {
	[key in keyof T]?: Filter<T>;
};
