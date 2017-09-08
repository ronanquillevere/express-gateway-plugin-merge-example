// Rollup plugins
import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import resolve from 'rollup-plugin-node-resolve';
import multiEntry from 'rollup-plugin-multi-entry';
import eslint from 'rollup-plugin-eslint';

export default {
  entry: 'test/**/*.js',
  dest: 'test/transpiled/tests.js',
  format: 'es',
  plugins: [
      resolve(),
      multiEntry(),
      eslint(),
      babel(babelrc())
  ]
};
