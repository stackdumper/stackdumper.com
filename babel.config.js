module.exports = {
  presets: [
    "@babel/preset-typescript",
    "@babel/preset-env", // see .browserslist
    "@babel/preset-react",
  ],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    "babel-plugin-styled-components",
  ]
}
