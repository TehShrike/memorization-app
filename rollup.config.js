import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import visualizer from 'rollup-plugin-visualizer'
import replace from 'rollup-plugin-replace'

export default {
	input: './client/index.js',
	output: {
		file: './public/index-bundle.js',
		format: 'iife',
	},
	sourcemap: true,
	plugins: [
		replace({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
		}),
		vue(),
		commonjs(),
		resolve({
			browser: true,
		}),
		visualizer(),
	],
}
