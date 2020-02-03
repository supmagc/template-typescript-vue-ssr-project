module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2019,
        sourceType: 'module',
        tsconfigRootDir: 'build/',
        project: ['tsconfig.tests.json', 'tsconfig.build.json'],
        extraFileExtensions: ['vue']
    },
    env: {
        node: true,
        commonjs: true,
        browser: true
    },
    extends: [
        'eslint:recommended',
        'plugin:eslint-plugin-vue/recommended',
        'plugin:@typescript-eslint/eslint-plugin/eslint-recommended',
        'plugin:@typescript-eslint/eslint-plugin/recommended',
        'plugin:@typescript-eslint/eslint-plugin/recommended-requiring-type-checking',
        'plugin:eslint-plugin-prettier/recommended',
        'eslint-config-prettier',
        'eslint-config-prettier/@typescript-eslint',
        'eslint-config-prettier/vue'
    ],
    rules: {
        'no-async-promise-executor': 'off',
        'no-prototype-builtins': 'off',
        'prettier/prettier': ['error', JSON.parse(require('fs').readFileSync('build/prettierrc.json'))],
        '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-empty-interface': 'off'
    }
};
