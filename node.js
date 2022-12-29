module.exports = {
    env: {
        node: true,
        mocha: true
    },
    extends: "./base.js",
    rules: {
    // Overrides
        "no-buffer-constructor": "error",
        "no-console": "off",
        "comma-dangle": ["error", "only-multiline"],
        // Additions
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
        ]
    }
};
