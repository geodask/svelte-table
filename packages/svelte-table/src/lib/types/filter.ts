export type Filter<T> = {
	value?: string;
	condition?: (value: string, item: T) => boolean;
};

export type Filters<T> = {
	[key in keyof T]?: Filter<T>;
};
