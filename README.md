# @martylouis/stylelint-config

[![npm version](https://badge.fury.io/js/%40martylouis%2Fstylelint-config.svg)](https://badge.fury.io/js/%40martylouis%2Fstylelint-config)

An opinionated [Stylelint](https://stylelint.io) and [Prettier](https://prettier.io) config for writing neat CSS or SCSS.

## Installation

To use this config, install this package to your project.

```sh
npx install-peerdeps --dev @martylouis/stylelint-config
```

Or, if you’re using [Yarn](https://yarn.io) for package management:

```sh
yarn add -D @martylouis/stylelint-config \
prettier \
prettier-stylelint \
stylelint \
stylelint-config-prettier \
stylelint-config-rational-order \
stylelint-config-recommended-scss \
stylelint-scss
```

## Use my config or roll your own

#### Add to your `package.json`

```json
{
  "stylelint": {
    "extends": "@martylouis/stylelint-config"
  }
}
```

#### OR add this to your `.stylintrc`

```json
{
  "extends": "@martylouis/stylelint-config"
}
```

## Format styles on save with VS Code

1. Install the [Stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint) Extension
2. Install the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) Extension
3. Add this to your VS Code `settings.json`

```json
{
  "prettier.stylelintIntegration": true
}
```

---

[@martylouis](twitter.com/martylouis)
