import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer'
import { resolve } from 'path'

export default defineConfig({

	css: {
		postcss: {
			plugins: [autoprefixer()],
		},
	},

	base: "./",

	publicDir: './src/assets',

	build: {

		manifest: true,

		rollupOptions: {

			input: resolve(__dirname, 'src/main.js'),

			output: {
				dir: 'dist',
				entryFileNames: 'build/bundle-[hash].js',
				assetFileNames: 'build/bundle-[hash].css',
			}
		}
	}

})
