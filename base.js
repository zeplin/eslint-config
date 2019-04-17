module.exports = {
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: "module"
    },
    extends: "eslint:recommended",
    plugins: [
        "import"
    ],
    rules: {
        "accessor-pairs": "error",
        "array-bracket-spacing": ["error", "never"],
        "array-callback-return": "error",
        "arrow-body-style": ["warn", "as-needed"],
        "arrow-parens": ["error", "as-needed"],
        "arrow-spacing": "error",
        "block-scoped-var": "error",
        "block-spacing": "error",
        "brace-style": [
            "error",
            "1tbs",
            {
                // Drop this with arrow function support
                allowSingleLine: true
            }
        ],
        "camelcase": [
            "error",
            {
                // Intercom, Stripe, etc.
                properties: "never"
            }
        ],
        "capitalized-comments": "warn",
        "class-methods-use-this": "error",
        "comma-dangle": "error",
        "comma-spacing": "error",
        "comma-style": ["error", "last"],
        "complexity": "warn",
        "computed-property-spacing": ["error", "never"],
        "curly": "error",
        "default-case": "warn",
        "dot-location": ["error", "property"],
        "dot-notation": "error",
        "eol-last": "always",
        "eqeqeq": "error",
        "for-direction": "error",
        "func-style": [
            "error",
            "declaration",
            {
                allowArrowFunctions: true
            }
        ],
        "generator-star-spacing": "error",
        "guard-for-in": "error",
        "handle-callback-err": [
            "error",
            "^(e|E)|^.*(Error)"
        ],
        "id-blacklist": "error",
        "id-match": "error",
        "indent": ["error", 4, { SwitchCase: 1 }],
        "key-spacing": "error",
        "keyword-spacing": "error",
        "linebreak-style": ["error", "unix"],
        "max-depth": "error",
        "max-len": ["error", {
            code: 120,
            ignoreComments: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true
        }],
        "max-nested-callbacks": [
            "error",
            {
                max: 8
            }
        ],
        "max-statements-per-line": [
            "error",
            {
                max: 1
            }
        ],
        "max-params": [
            "error",
            {
                max: 4
            }
        ],
        "new-cap": "error",
        "new-parens": "error",
        "no-alert": "error",
        "no-await-in-loop": "error",
        "no-caller": "error",
        "no-catch-shadow": "error",
        "no-confusing-arrow": [
            "error",
            {
                allowParens: true
            }
        ],
        "no-continue": "error",
        "no-duplicate-imports": "error",
        "no-else-return": "error",
        "no-empty-function": "error",
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
        "no-loop-func": "error",
        "no-magic-numbers": [
            "warn",
            {
                ignore: [-1, 0, 1]
            }
        ],
        "no-multi-assign": "error",
        "no-mixed-requires": "error",
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
        "no-new-require": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-path-concat": "error",
        "no-proto": "error",
        "no-redeclare": "off",
        "no-restricted-globals": "error",
        "no-restricted-imports": "error",
        "no-restricted-modules": "error",
        "no-restricted-properties": "error",
        "no-restricted-syntax": "error",
        "no-return-assign": "error",
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow": [
            "error",
            {
                allow: ["_"],
                hoist: "functions"
            }
        ],
        "no-shadow-restricted-names": "error",
        "no-tabs": "error",
        "no-template-curly-in-string": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": [
            "error",
            {
                skipBlankLines: false
            }
        ],
        "no-underscore-dangle": [
            "error",
            {
                allow: ["_id", "__v"]
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
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "no-whitespace-before-property": "error",
        "object-property-newline": [
            "error",
            {
                allowAllPropertiesOnSameLine: true
            }
        ],
        "object-curly-newline": [
            "error",
            {
                minProperties: 5,
                consistent: true
            }
        ],
        "object-curly-spacing": ["error", "always"],
        "one-var": [
            "error",
            "never"
        ],
        "one-var-declaration-per-line": ["error", "initializations"],
        "operator-assignment": "error",
        "operator-linebreak": "error",
        "padded-blocks": ["error", "never"],
        "prefer-numeric-literals": "error",
        "prefer-promise-reject-errors": [
            "error",
            {
                allowEmptyReject: true
            }
        ],
        "quote-props": ["error", "consistent-as-needed"],
        "quotes": [
            "error",
            "double",
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ],
        "radix": "error",
        "require-await": "error",
        "semi": ["error", "always"],
        "semi-spacing": "error",
        "semi-style": "error",
        "space-before-blocks": "error",
        "space-before-function-paren": [
            "error",
            { anonymous: "always", named: "never" }
        ],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": "error", // Default parameter issue, See: https://github.com/eslint/eslint/issues/
        "spaced-comment": "error",
        "strict": ["error", "function"],
        "template-curly-spacing": ["error", "never"],
        "template-tag-spacing": "error",
        "unicode-bom": ["error", "never"],
        "valid-jsdoc": "error",
        "valid-typeof": [
            "error",
            {
                requireStringLiterals: false
            }
        ],
        "wrap-iife": "error",
        "yield-star-spacing": "error",
        "yoda": [
            "error",
            "never",
            {
                exceptRange: true
            }
        ],
        // Checks

        // Ensure imports point to files/modules that can be resolved
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
        "import/no-unresolved": ["error", { commonjs: true, caseSensitive: true }],
        // Ensure named imports coupled with named exports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
        "import/named": "error",
        // Ensure a default export is present, given a default import.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
        "import/default": "error",
        // Ensure imported namespaces contain dereferenced properties as they are dereferenced.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
        "import/namespace": "error",
        // Forbid webpack loader syntax in imports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
        "import/no-webpack-loader-syntax": "error",
        // Report any invalid exports, i.e. re-export of the same name
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
        "import/export": "error",
        // Style

        // Report any imports that come after non-import statements.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
        "import/first": "error",
        // Report repeated import of the same module in multiple places
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
        "import/no-duplicates": "error",
        // Ensure all exports appear after other statements
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md
        "import/exports-last": "error"
    }
};
