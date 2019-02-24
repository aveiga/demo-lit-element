import typescript from "rollup-plugin-typescript";
import { terser } from "rollup-plugin-terser";

let plugins = [
  typescript({
    target: "es2017"
  })
];

if (process.env.BUILD === "prod") {
  plugins = plugins.concat([terser()]);
}

module.exports = [
  {
    input: "i18n.ts",
    output: {
      file: "dist/i18n.js",
      format: "esm"
    },
    plugins: plugins
  }
];
