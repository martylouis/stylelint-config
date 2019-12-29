# @martylouis/stylelint-config [![npm version](https://badge.fury.io/js/%40martylouis%2Fstylelint-config.svg)](https://badge.fury.io/js/%40martylouis%2Fstylelint-config)

An opinionated [Stylelint](https://stylelint.io) config for writing neat CSS or SCSS. ~~ Now supports [TailwindCSS directives](https://tailwindcss.com/docs/functions-and-directives/).

## Installation

1. Install this package with `npx`.
```sh
npx install-peerdeps --dev @martylouis/stylelint-config
```
2. Add this to your `.stylintrc`

```json
{
  "extends": "@martylouis/stylelint-config"
}
```

## [VS Code](https://code.visualstudio.com/) AutoFormat setup:

1. Install the [Stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint) Extension
2. Add this to your VS Code `settings.json`

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true,
  }
}
```
---

[@martylouis on Twitter](twitter.com/martylouis)
