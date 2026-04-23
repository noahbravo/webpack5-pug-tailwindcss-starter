import js from '@eslint/js'
import globals from 'globals'
import importPlugin from 'eslint-plugin-import'
import nPlugin from 'eslint-plugin-n'
import prettier from 'eslint-plugin-prettier'
import promisePlugin from 'eslint-plugin-promise'

export default [
  {
    ignores: ['dist', 'node_modules']
  },

  js.configs.recommended,

  {
    files: ['**/*.{js,mjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.mjs', '.css']
        }
      }
    },
    plugins: {
      import: importPlugin,
      n: nPlugin,
      promise: promisePlugin,
      prettier
    },
    rules: {
      ...promisePlugin.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      ...nPlugin.configs['recommended-module'].rules,

      'prettier/prettier': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'n/no-missing-import': 'off',

      'import/order': [
        'warn',
        {
          groups: [
            ['builtin', 'external'],
            'internal',
            ['parent', 'sibling', 'index']
          ],
          'newlines-between': 'always'
        }
      ]
    }
  },

  {
    files: ['vite.config.js', 'eslint.config.mjs'],
    rules: {
      'import/no-unresolved': 'off'
    }
  },

  {
    files: ['tests/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.vitest
      }
    }
  }
]
