module.exports = {
  env: {
    node: true,
    mocha: true
  },
  extends: "./base.js",
  rules: {
    //overrides
    "no-buffer-constructor": "error",
    "no-console": "off",
    // additions
    "global-require": "error",
    "handle-callback-err": "error",
    "no-duplicate-imports": ["error", { includeExports: true }],
    "no-process-env": "error",
    "no-process-exit": "error",
    "no-sync": "error",
    "object-shorthand": ["error", "always"],
    "prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "rest-spread-spacing": [
        "error",
        "never"
    ],
  }
};
