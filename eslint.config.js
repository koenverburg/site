const nextConfig = require('eslint-config-next')
const unicorn = require('eslint-plugin-unicorn').default
const stylistic = require('@stylistic/eslint-plugin')
const perfectionist = require('eslint-plugin-perfectionist')
const {plugin: ex} = require('eslint-plugin-exception-handling')

module.exports = [
  ...nextConfig,
  {
    // eslint-plugin-react v7 calls context.getFilename() removed in ESLint 10.
    // Providing the version explicitly bypasses the auto-detection.
    settings: {
      react: {version: '19.2.4'},
    },
  },
  {
    ignores: [
      '.next/**',
      '.velite/**',
      '.contentlayer/**',
      '**/node_modules/**',
      'eslint.config.js',
      'next.config.js',
      'tailwind.config.js',
      'postcss.config.js',
      'velite.config.js',
    ],
  },
  {
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    plugins: {
      ex,
      unicorn,
      perfectionist,
      '@stylistic': stylistic,
    },
    rules: {
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'line-length',
          order: 'asc',
          newlinesBetween: 1,
          groups: [
            'type',
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'style',
            'side-effect',
          ],
          customGroups: [],
        },
      ],
      'perfectionist/sort-named-imports': ['error', {order: 'asc'}],
      'perfectionist/sort-named-exports': ['error', {order: 'asc'}],
      'perfectionist/sort-modules': [
        'warn',
        {
          type: 'natural',
          order: 'asc',
          fallbackSort: {type: 'unsorted'},
          specialCharacters: 'keep',
          partitionByComment: false,
          partitionByNewLine: false,
          newlinesBetween: 'ignore',
          groups: [
            ['enum', 'export-enum'],
            ['interface', 'export-interface', 'type', 'export-type'],
            'declare-function',
            'function',
            'export-function',
            'class',
            'declare-class',
            'export-class',
          ],
        },
      ],
      'perfectionist/sort-exports': ['error'],
      'perfectionist/sort-array-includes': ['error'],
      'perfectionist/sort-objects': [
        'error',
        {
          order: 'asc',
          groups: ['property', 'member', 'method', 'multiline-member'],
        },
      ],

      // Complexity
      complexity: ['warn', {max: 10, variant: 'classic'}],

      // Max
      'max-lines': ['error', {max: 300, skipBlankLines: true, skipComments: true}],
      'max-depth': ['error', 4],
      'max-params': ['error', 4],
      'max-statements': ['error', 10],

      'dot-notation': ['error', {allowKeywords: true}],

      // No's
      'no-unused-vars': 'error',
      'no-else-return': 'error',
      'no-object-constructor': 'error',
      'no-loop-func': 'error',
      'unicorn/no-null': 'warn',
      'unicorn/no-for-loop': 'error',
      'unicorn/no-lonely-if': 'error',
      'unicorn/no-array-reduce': 'error',
      'unicorn/no-array-for-each': 'warn',

      // Prefers
      'prefer-const': 'error',
      'prefer-template': 'error',
      'unicorn/better-regex': 'warn',
      'unicorn/prefer-math-trunc': 'error',
      'unicorn/prefer-number-properties': 'error',
      'unicorn/prefer-at': 'error',
      'unicorn/prefer-array-find': 'error',
      'unicorn/prefer-array-flat': 'error',
      'unicorn/prefer-array-flat-map': 'error',
      'unicorn/prefer-node-protocol': 'error',
      'unicorn/no-array-method-this-argument': 'error',
      'unicorn/prefer-set-has': 'error',
      'unicorn/prefer-array-index-of': 'error',
      'unicorn/prefer-spread': 'error',

      // Style
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/max-len': ['error', {code: 240}],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/spaced-comment': ['error', 'always'],
      '@stylistic/object-curly-spacing': ['error', 'never'],
      '@stylistic/type-generic-spacing': ['error'],
      'lines-between-class-members': ['error', 'always'],
      '@stylistic/arrow-spacing': 'error',
      '@stylistic/computed-property-spacing': ['error', 'never'],
      '@stylistic/function-paren-newline': ['error', {minItems: 4}],
      '@stylistic/function-call-argument-newline': ['error', 'consistent'],
      '@stylistic/padding-line-between-statements': [
        'error',
        {blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
        {blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var']},
      ],
      '@stylistic/key-spacing': [
        'error',
        {
          align: {
            afterColon: true,
            beforeColon: false,
            on: 'value',
          },
        },
      ],
    },
  },
]
