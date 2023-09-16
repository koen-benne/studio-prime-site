const { build } = require("esbuild");
const { solidPlugin } = require("esbuild-plugin-solid");
const cssModulesPlugin = require("esbuild-css-modules-plugin");

build({
  entryPoints: ["src/index.jsx"],
  bundle: true,
  outfile: "docs/main.js",
  minify: true,
  loader: {
    ".svg": "dataurl",
    ".otf": "dataurl",
    ".png": "dataurl",
  },
  logLevel: "info",
  plugins: [
    solidPlugin(),
    cssModulesPlugin()
  ],
}).catch(() => process.exit(1));
