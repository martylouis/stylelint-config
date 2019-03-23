module.exports = {
  "extends": [
    "stylelint-config-prettier",
    "stylelint-config-rational-order",
    "stylelint-config-recommended-scss"
  ],
  "plugins": ["stylelint-scss"],
  "rules": {
    "at-rule-no-unknown": null,
    "block-no-empty": null,
    "declaration-colon-space-after": "always",
    "declaration-empty-line-before": null,
    "no-descending-specificity": null,
    "number-leading-zero": "always",
    "property-no-vendor-prefix": true,
    "scss/at-rule-no-unknown": true,
    "selector-combinator-space-after": "always",
    "selector-no-qualifying-type": true,
    "selector-no-vendor-prefix": true
  }
};
