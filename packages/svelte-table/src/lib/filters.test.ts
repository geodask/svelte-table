// import { describe, expect, it } from "vitest";
// import { Filters } from "./filters.svelte.js";

// describe('filters', () => {
//   it('should filter data correctly', () => {
//     const filters = new Filters();
//     filters.setColumnFilter('name', {
//       condition: (filterValue: string, itemValue: string) => itemValue.includes(filterValue),
//       value: 'John',
//     });

//     const filteredData = filters.filter([
//       { id: 1, name: 'John Doe', age: 25 },
//       { id: 2, name: 'Jane Doe', age: 24 },
//       { id: 3, name: 'John Smith', age: 30 },
//     ]);

//     expect(filteredData).toEqual([
//       { id: 1, name: 'John Doe', age: 25 },
//       { id: 3, name: 'John Smith', age: 30 },
//     ]);
//   });

// })