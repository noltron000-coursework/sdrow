import typescript from 'rollup-plugin-typescript2'
import { terser } from "rollup-plugin-terser";
import pkg from './package.json'

export default [
	{
		input: pkg.source,
		output: [
			{
				file: pkg.main,
				format: 'umd',
				name: 'sdrow'
			},
		],
		plugins: [
			typescript({
				typescript: require('typescript'),
			}),
			terser(),
		],
	},
	{
		input: pkg.source,
		output: [
			{
				file: pkg.module,
				format: 'esm',
				name: 'sdrow'
			},
		],
		plugins: [
			typescript({
				typescript: require('typescript'),
			}),
		],
	},
]
