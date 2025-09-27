import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
    js.configs.recommended,
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            '@typescript-eslint': typescript,
            'react': react,
            'react-hooks': reactHooks,
        },
        rules: {
            ...typescript.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',
            'semi': ['error', 'never'],
            'quotes': ['error', 'single'],
            'indent': ['error', 4],
            'no-undef': 'off',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
]