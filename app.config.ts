import { defineConfig } from '@solidjs/start/config'
import wyw from '@wyw-in-js/vite'

export default defineConfig({
	vite: {
		plugins: [
			wyw({
				include: ['**/*.{ts,tsx}'],
				babelOptions: {
					presets: ['@babel/preset-typescript'],
				},
				classNameSlug: (_hash, title) => title.replace(/([a-z])([0-9A-Z])/g, '$1-$2').toLowerCase(),
			}),
		],
	},
	server: {
		preset: 'github-pages',
		prerender: {
			crawlLinks: true,
		},
	},
})
