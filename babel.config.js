module.exports = {
  presets: [
    "@babel/preset-typescript",
    "@babel/preset-env", // see .browserslist
    "@babel/preset-react",
  ],
  plugins: [
    ["import", {
      "libraryName": "react-feather",
      "libraryDirectory": "dist/icons",
    }, "import-react-feather"],
    ["import", {
      "libraryName": "react-use",
      "libraryDirectory": "lib",
      "camel2DashComponentName": false
    }, "import-react-use"],
    ["import", {
      "libraryName": "react-flexbox-grid",
      "libraryDirectory": "lib/components",
      "camel2DashComponentName": false
    }, "import-react-flexbox-grid"],
    "@babel/plugin-syntax-dynamic-import",
    "babel-plugin-styled-components",
  ]
}
