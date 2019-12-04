module.exports = {
  extends: "airbnb",
  plugins: [
    "react",
    "jsx-a11y",
    "import",
  ],
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaFeature: {
        jsx: true
      },
    ignorePatterns: ["node_modules/", ".cache/", "public/"],
  },
  parser: "babel-eslint",
};
