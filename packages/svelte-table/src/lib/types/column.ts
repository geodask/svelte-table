export type AccessorKey<T> = keyof T;

export type Column<T> = {
	id: string;
	accessorKey?: AccessorKey<T>;
	label: string;
};


