import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import copy from "rollup-plugin-copy";
import AtImport from "postcss-import";
import typescript from "rollup-plugin-typescript";

module.exports = [
  {
    input: "basic-component.ts",
    output: {
      file: "dist/basic-component.js",
      format: "esm"
    },
    plugins: [
      typescript({
        target: "es6"
      }),
      terser(),
      resolve(),
      postcss({
        plugins: [AtImport()]
      }),
      copy({
        "index.html": "dist/index.html",
        "i18n.json": "dist/i18n.json"
      })
    ]
  }
];
