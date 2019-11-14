import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

export default {
	input: pkg.main,
	output: [
		{
			file: pkg.module,
			format: 'umd',
			name: 'sdrow'
		},
	],
	external: [
		...Object.keys(pkg.dependencies || {}),
		...Object.keys(pkg.peerDependencies || {}),
	],
	plugins: [
		typescript({
			typescript: require('typescript'),
		}),
	],
}
