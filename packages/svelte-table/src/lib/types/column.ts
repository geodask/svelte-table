export type Column<T> = {
	id: string;
	accessorKey?: keyof T;
	label: string;
};
