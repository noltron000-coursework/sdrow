import typescript from 'rollup-plugin-typescript2'

export default {
	plugins: [
		typescript({
			typescript: require('typescript'),
		}),
	],
	input: 'problems.ts',
	output: {
		file: 'umd/your-module.js',
		format: 'umd',
		name: 'problems',
	},
}
