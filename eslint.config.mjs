import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config} */
export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            sourceType: 'module',
            ecmaVersion: 'latest',
            globals: globals.browser,
        },
        plugins: {
            js: pluginJs,
        },
        rules: {
            semi: ['error', 'always'], // Wajib menggunakan titik koma ;
            indent: ['error', 2], // Indentasi 2 spasi
            'object-curly-spacing': ['error', 'always'], // Spasi dalam `{ }`
            'prefer-const': 'error', // Gunakan `const` jika tidak diubah
        },
    },
];
