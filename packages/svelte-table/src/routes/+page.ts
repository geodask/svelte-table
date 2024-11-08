export type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

export const load = async ({ fetch }) => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	const posts: Post[] = await response.json();
	return {
		posts
	};
};
