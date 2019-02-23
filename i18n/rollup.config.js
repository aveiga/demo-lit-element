import typescript from "rollup-plugin-typescript";

module.exports = [
  {
    input: "i18n.ts",
    output: {
      file: "dist/i18n.js",
      format: "esm"
    },
    plugins: [
      typescript({
        target: "es2017"
      })
    ]
  }
];
