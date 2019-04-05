module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
        "browser": true
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prefer-stateless-function": [0, { "ignorePureComponents": false}],
        "react/button-has-type": [0],
        "indent": ["error", 4],
        "react/jsx-indent": [1, 4],
        "jsx-quotes": [1, "prefer-single"],
        "arrow-body-style": [1, "as-needed"]
    },
    "plugins": [
        "react",
        "import",
        "jsx-a11y"
    ],
};