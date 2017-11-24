module.exports = {
  env: {
    browser: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react"],
  settings: {
    react: {
      pragma: "preact"
    }
  },
  extends: "./base.js",
  rules: {
    "no-var": "warn",
    "react/jsx-curly-spacing": "error",
    "react/jsx-key": "warn",
    "react/jsx-no-bind": ["error", { ignoreRefs: true }],
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-is-mounted": "error",
    "react/no-string-refs": "error",
    "react/prefer-es6-class": "error",
    "react/prefer-stateless-function": "warn",
    "react/require-render-return": "error",
    "react/self-closing-comp": ["error", { html: false, component: true }]
  }
};
