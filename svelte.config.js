import adapter from '@sveltejs/adapter-netlify';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(), // for netlify adapter
	},

    preprocess: [preprocess({
        postcss: true
    })]
};

export default config;