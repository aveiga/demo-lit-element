import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
// import uglify from "rollup-plugin-uglify";
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
      resolve(),
      postcss({
        plugins: [AtImport()]
      }),
      babel({
        exclude: "node_modules/**"
      }),
      //   uglify(),
      copy({
        "index.html": "dist/index.html"
      }),
      serve("dist"),
      livereload({
        watch: "dist"
      })
    ]
  }
];
