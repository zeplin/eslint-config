module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  extends: "eslint:recommended",
  rules: {
    "array-bracket-spacing": ["error", "never"],
    "array-callback-return": "error",
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": "error",
    "block-spacing": "error",
    "brace-style": [
      "error",
      "1tbs",
      {
        // Drop this with arrow function support
        allowSingleLine: true
      }
    ],
    camelcase: [
      "error",
      {
        // Intercom, Stripe, etc.
        properties: "never"
      }
    ],
    "comma-spacing": "error",
    "comma-style": ["error", "last"],
    complexity: [
      "warn",
      {
        max: 10
      }
    ],
    "computed-property-spacing": ["error", "never"],
    curly: "error",
    "dot-location": ["error", "property"],
    "dot-notation": "error",
    "eol-last": "error",
    eqeqeq: "error",
    "func-style": [
      "error",
      "declaration",
      {
        allowArrowFunctions: true
      }
    ],
    "generator-star-spacing": "error",
    "id-blacklist": "error",
    indent: ["error", 4, { SwitchCase: 1 }],
    "key-spacing": "error",
    "keyword-spacing": "error",
    "linebreak-style": ["error", "unix"],
    "max-depth": "error",
    "max-len": [
      "warn",
      {
        code: 200
      }
    ],
    "max-nested-callbacks": "error",
    "max-statements-per-line": [
      "error",
      {
        max: 1
      }
    ],
    "new-parens": "error",
    "no-alert": "error",
    "no-caller": "error",
    "no-catch-shadow": "error",
    "no-confusing-arrow": [
      "error",
      {
        allowParens: true
      }
    ],
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": "off",
    "no-floating-decimal": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-inner-declarations": ["error", "functions"],
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxEOF: 1
      }
    ],
    "no-native-reassign": "error",
    "no-nested-ternary": "error",
    "no-new": "warn",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-octal-escape": "error",
    "no-path-concat": "error",
    "no-proto": "error",
    "no-redeclare": "off",
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-shadow": [
      "error",
      {
        hoist: "functions"
      }
    ],
    "no-shadow-restricted-names": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": [
      "error",
      {
        skipBlankLines: false
      }
    ],
    "no-undefined": "error",
    "no-undef-init": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unused-vars": [
      "error",
      {
        args: "none"
      }
    ],
    "no-use-before-define": [
      "error",
      {
        functions: false
      }
    ],
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "warn",
    "no-useless-escape": "error",
    "no-whitespace-before-property": "error",
    "object-property-newline": [
      "error",
      {
        allowMultiplePropertiesPerLine: true
      }
    ],
    "object-curly-spacing": ["error", "always"],
    "one-var-declaration-per-line": ["error", "initializations"],
    "padded-blocks": ["error", "never"],
    "quote-props": ["error", "consistent-as-needed"],
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    radix: "error",
    semi: ["error", "always"],
    "semi-spacing": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": [
      "error",
      { anonymous: "always", named: "never" }
    ],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    strict: ["error", "function"],
    "template-curly-spacing": ["error", "never"],
    yoda: [
      "error",
      "never",
      {
        exceptRange: true
      }
    ]
  }
};
