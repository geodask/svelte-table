import type { Cell } from './cell.js';

export type Row<T> = {
	cells: Cell<T>[];
};
