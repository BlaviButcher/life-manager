import cloudflare from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';
// svelte.config.js

// svelte.config.js
import { optimizeImports } from 'carbon-preprocess-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess(), optimizeImports()],

	kit: {
		adapter: cloudflare()
	}
};

export default config;
