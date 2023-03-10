module.exports = {
  parser: '@typescript-eslint/parser', // 定义ESLint的解析器
  extends: ['plugin:prettier/recommended'], // 定义文件继承的子规范
  plugins: ['@typescript-eslint', 'react-hooks', 'eslint-plugin-react'], // 定义了该eslint文件所依赖的插件
  env: {
    // 指定代码的运行环境
    browser: true,
    node: true
  },
  settings: {
    // 自动发现React的版本，从而进行规范react代码
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  parserOptions: {
    // 指定ESLint可以解析JSX语法
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // 自定义的一些规则
    'prettier/prettier': 'error',
    'linebreak-style': ['error', 'unix'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/react-in-jsx-scope': 'error',
    'no-undef': 0,
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': 1,
    'no-empty': 0,
    'no-useless-escape': 1,
    'no-fallthrough': 1,
    'no-extra-boolean-cast': 1,
    'react/prop-types': 0,
    'react/no-deprecated': 0,
    'react/display-name': 0,
    'react/no-find-dom-node': 1,
    'react/no-unescaped-entities': 'warn',
    'react/no-string-refs': 'warn',
    'react/jsx-no-target-blank': 'warn',
    'react/no-children-prop': 0,
    'valid-typeof': [
      'warn',
      {
        requireStringLiterals: false
      }
    ]
  }
};
