# eslint-config

<!-- [![Version](https://badgen.net/npm/v/@appfarm/eslint-config)](https://www.npmjs.org/package/@appfarm/eslint-config) -->
[![MIT License](https://badgen.net/github/license/appfarm-io/eslint-config)](LICENSE.md)
<!-- ![Checks](https://badgen.net/github/checks/appfarm-io/eslint-config) -->

Our ESLint configuration, based on [Airbnb's].

## Usage

Install `eslint` if not done so already:

```shell
yarn add --dev eslint
```

Install our configuration from GitHub:

```shell
yarn add --dev github:appfarm-io/eslint-config#1.1.0
```

Install additional plugin dependencies for modules and Jest testing:

```shell
yarn add --dev eslint-plugin-import
yarn add --dev eslint-plugin-jest
```

The configuration snippets below are for `.eslintrc.json` files, but the instructions apply to any of
the other [supported ESLint configuration files], too.

Configure [which version of Jest] is in use:

```json
{
  "settings": {
    "jest": {
      "version": 26
    }
  }
}
```

Follow the instructions below depending on the project being set up:

- JavaScript
- React
- TypeScript
- TypeScript + React

### JavaScript project

No additional dependencies required, simply extend our default configuration:

```json
{
  "extends": "@appfarm/eslint-config"
}
```

### React project

Install additional plugin dependencies for React and accessibility:

```shell
yarn add --dev eslint-plugin-react
yarn add --dev eslint-plugin-jsx-a11y
```

Extend our React configuration:

```json
{
  "extends": "@appfarm/eslint-config/react"
}
```

### TypeScript project

Install `typescript` if not done so already:

```shell
yarn add --dev typescript
```

Install additional dependencies for TypeScript's eslint parser and plugin:

```shell
yarn add --dev @typescript-eslint/parser
yarn add --dev @typescript-eslint/eslint-plugin
```

Extend our TypeScript configuration:

```json
{
  "extends": "@appfarm/eslint-config/typescript"
}
```

Certain rules require insight into the TypeScript configuration, configure as follows:

```json
{
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

### TypeScript + React project

Follow the above instructions for both TypeScript and React.

Extend our TypeScript + React configuration, instead:

```json
{
  "extends": "@appfarm/eslint-config/typescript+react"
}
```

## Development

Each configuration has a corresponding fixture folder in `fixtures`.

To test linting rules for all configurations, run `yarn lint`.

[Airbnb's]: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
[supported ESLint configuration files]: https://eslint.org/docs/latest/user-guide/configuring/configuration-files#configuration-file-formats
[which version of Jest]: https://github.com/jest-community/eslint-plugin-jest#jest-version-setting
