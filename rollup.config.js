import babel from 'rollup-plugin-babel'
import typescript from 'rollup-plugin-typescript2'
import scss from 'rollup-plugin-scss'
import postcss from 'rollup-plugin-postcss'

export default {
  input: './lib/index.ts',
  output: {
    filename: 'bundle.js',
    format: 'cjs'
  },
  plugins: [typescript(), scss(), babel(), postcss({
    extract: true,
    namedExports: true,
    minimize: true,
    sourceMap: true,
    extensions: ['.scss', '.css'],
  })],
}