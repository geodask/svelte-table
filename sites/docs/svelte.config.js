import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { join } from 'path';
import { createHighlighter } from 'shiki';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const highlighter = await createHighlighter({
						langs: ['svelte', 'typescript', 'javascript', 'bash'],
						themes: ['dark-plus']
					});

					await highlighter.loadLanguage('svelte', 'typescript', 'javascript', 'bash');
					const html = highlighter.codeToHtml(code, {
						lang,
						theme: 'dark-plus'
					});
					return `{@html \`${html}\` }`;
				}
			},
			layout: {
				page: join(import.meta.dirname, './src/lib/markdown/layouts/default.svelte'),
				_: join(import.meta.dirname, './src/lib/markdown/layouts/default.svelte')
			}
		})
	],
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	},
	extensions: ['.svelte', '.svx']
};

export default config;
