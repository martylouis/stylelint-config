module.exports = {
  "extends": [
    "stylelint-config-recommended",
    "stylelint-config-rational-order"
  ],
  "plugins": [
    "stylelint-prettier",
    "stylelint-scss"
  ],
  "rules": {
    "prettier/prettier": true,
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "extends",
          "tailwind",
          "apply",
          "variants",
          "screen",
          "responsive"
        ]
      }
    ],
    "block-no-empty": null,
    "declaration-colon-space-after": "always",
    "declaration-empty-line-before": null,
    "no-descending-specificity": null,
    "number-leading-zero": "always",
    "property-no-vendor-prefix": true,
    "selector-combinator-space-after": "always",
    "selector-no-qualifying-type": true,
    "selector-no-vendor-prefix": true
  }
}
