import eslint from 'rollup-plugin-eslint';
import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
//import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-re';

export default {
    input: 'src/main.js',
    output :{
        file: 'dist/merge-example-policy.cjs.js',
        format: 'cjs'
    },
    plugins: [
        resolve({
            preferBuiltins: true
        }),
        replace({
         patterns: [
           {
             match: /formidable(\/|\\)lib/,
             test: 'if (global.GENTLY) require = GENTLY.hijack(require);',
             replace: '',
           }
         ]
       }),
        commonjs(),
        json(),
        ,eslint()
        ,babel(babelrc())
        //,uglify()
    ]
};
