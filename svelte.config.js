import adapter from '@sveltejs/adapter-netlify'
import sveltePreprocess from 'svelte-preprocess'

const config = {
	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},
	preprocess: sveltePreprocess()
};

export default config;
