# eslint-config

Zeplin's homegrown `.eslintrc` as an extensible shared config. 🌳

## Usage

Package is available on npm:
```sh
npm install @zeplin/eslint-config
```

## Configurations

### Base
`eslint-config` (or `eslint-config/base`) is the base configuration.

- Add `extends: "zeplin"` to your `.eslintrc`.

### Browser

`eslint-config/browser` adds preact support for browser use, requiring `eslint-plugin-react` as well.

- Install `eslint-plugin-react` using npm:
```sh
npm install eslint-plugin-react
```
- Add `extends: "zeplin/browser"` to your `.eslintrc`.

### Node.js

`eslint-config/node` overrides the base config, providing better support for Node.js environment.

- Add `extends: "zeplin/node"` to your `.eslintrc`.
