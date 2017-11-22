module.exports = {
  env: {
    node: true
  },
  extends: "./base.js",
  rules: {
    //overrides
    "space-infix-ops": "off", // default parameter issue, See: https://github.com/eslint/eslint/issues/7489
    "no-console": "off",
    // additions
    "handle-callback-err": "error",
    "no-duplicate-imports": ["error", { includeExports: true }],
    "no-var": "error",
    "object-shorthand": ["error", "always"],
    "prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error"
  }
};
