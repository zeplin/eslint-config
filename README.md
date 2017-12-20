# eslint-config-zeplin

Zeplin's homegrown `.eslintrc` as an extensible shared config. 🌳

## Usage

Package is available on npm:
```sh
npm install eslint-config-zeplin
```

## Configurations

### Base
`eslint-config-zeplin` (or `eslint-config-zeplin/base`) is the base configuration.

- Add `extends: "zeplin"` to your `.eslintrc`.

### Browser

`eslint-config-zeplin/browser` adds preact support for browser use, requiring `eslint-plugin-react` as well.

- Install `eslint-plugin-react` using npm:
```sh
npm install eslint-plugin-react
```
- Add `extends: "zeplin/browser"` to your `.eslintrc`.

### Node.js

`eslint-config-zeplin/node` overrides the base config, providing better support for Node.js environment.

- Add `extends: "zeplin/node"` to your `.eslintrc`.
