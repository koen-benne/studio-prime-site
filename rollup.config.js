// rollup.config.js
import path from "path";
import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import copy from "rollup-plugin-copy";
import { terser } from "rollup-plugin-terser";
import manifest from "rollup-route-manifest";
import css from "rollup-plugin-import-css"

export default [
  {
    input: "src/App.jsx",
    output: [
      {
        dir: "public/js",
        format: "esm"
      }
    ],
    preserveEntrySignatures: false,
    plugins: [
      nodeResolve({ exportConditions: ["solid"], extensions: [".js", ".jsx", ".ts", ".tsx"] }),
      babel({
        babelHelpers: "bundled",
        presets: [["solid", { generate: "dom", hydratable: true }]]
      }),
      css(),
      terser()
    ]
  },
  {
    input: "src/index.jsx",
    output: [
      {
        dir: "lib",
        exports: "auto",
        format: "cjs"
      }
    ],
    external: ["solid-js", "solid-js/web", "node-fetch"],
    plugins: [
      nodeResolve({
        preferBuiltins: true,
        exportConditions: ["solid"],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }),
      css(),
      babel({
        babelHelpers: "bundled",
        presets: [["solid", { generate: "ssr", hydratable: true, async: true }]]
      }),
      json()
    ]
  }
];
