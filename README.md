# @martylouis/stylelint-config

[Stylelint](https://stylelint.io) with [Prettier](https://prettier.io) config.

## Installation

To use this config, install this package to your project.

```sh
npm i --dev @martylouis/stylelint-config
```

Or, if you’re using [Yarn](https://yarn.io) for package management:

```sh
yarn add -D @martylouis/stylelint-config
```

Next add this to your `.stylelintrc`

```json
{
  "extends": "@martylouis/stylelint-config"
}
```

## Stylelint & Prettier With VS Code

We want Stylelint and Prettier to format our CSS or SCSS on save:

1. Install the [Stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint) Extension
2. Install the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) Extension
3. Edit your VS Code `settings.json`

```json
{
  "prettier.stylelintIntegration": true
}
```