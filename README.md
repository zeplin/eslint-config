# eslint-config-zeplin

## Usage
There are three ESLint configurations to use.

Firstly, install package
`npm install git+ssh://git@github.com/zeplin/eslint-config-zeplin.git`


### eslint-config-zeplin or eslint-config-zeplin/base
Default eslint configuration

* Add `extends: "zeplin"` to your .eslintrc

### eslint-config-zeplin/browser

Adds additional preact eslint support for browser, requires "eslint-plugin-react"

* Install `npm install eslint-plugin-react`
* Add `extends: "zeplin/browser"` to your .eslintrc

### eslint-config-zeplin/node

Overrides base config, provides better support for node environment.

* Add `extends: "zeplin/node"` to your .eslintrc
