import eslint from 'rollup-plugin-eslint';
import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';

export default {
    entry: 'index.js',
    moduleName: 'mergeExamplePolicy',
    plugins: [
        resolve()
        ,eslint()
        ,babel(babelrc())
        //,uglify()
    ],
    targets: [
        { dest: 'dist/policy.cjs.js', format: 'cjs' }
      ]
};
