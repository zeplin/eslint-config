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
        "class-methods-use-this": [
            "error",
            {
            // https://github.com/eslint/eslint/issues/7085#issuecomment-250465391
                exceptMethods: [
                    "componentDidMount",
                    "componentDidUpdate",
                    "componentWillMount",
                    "componentWillReceiveProps",
                    "componentWillUnmount",
                    "componentWillUpdate",
                    "render",
                    "shouldComponentUpdate"
                ]
            }
        ],
        "no-var": "warn",
        "react/jsx-curly-spacing": ["error", { when: "never", children: true }],
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
        "react/self-closing-comp": ["error", { html: false, component: true }],
        "jsx-quotes": "error",
        "react/jsx-closing-bracket-location": ["error", "after-props"],
        "react/jsx-closing-tag-location": "error",
        "react/jsx-equals-spacing": "error",
        "react/jsx-curly-brace-presence": ["error", "never"],
        "react/jsx-pascal-case": "error",
        "react/jsx-tag-spacing": ["error", {
            closingSlash: "never",
            beforeSelfClosing: "never",
            afterOpening: "never"
        }],
        "react/jsx-wrap-multilines": ["error", {
            declaration: "parens-new-line",
            assignment: "parens-new-line",
            return: "parens-new-line",
            arrow: "parens-new-line",
            condition: "parens-new-line",
            logical: "parens-new-line",
            prop: "parens-new-line"
        }],
        "react/react-in-jsx-scope": "error"
    }
};
