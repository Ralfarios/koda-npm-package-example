const commonJS = require("@rollup/plugin-commonjs");
const nodeResolve = require("@rollup/plugin-node-resolve");
const terser = require("@rollup/plugin-terser");
const typeScript = require("@rollup/plugin-typescript");
const dts = require("rollup-plugin-dts");
const { babel } = require("@rollup/plugin-babel");
const pkg = require("./package.json");
const path = require("path");

/** @type import('rollup').RollupOptions[] */
module.exports = [
  // For Browser
  {
    input: "src/index.ts",
    output: [
      {
        name: pkg.name,
        file: pkg.browser.replace(".js", ".min.js"),
        format: "iife",
        extend: true,
        sourcemap: "inline",
        plugins: [terser()],
      },
    ],
    plugins: [
      nodeResolve({ browser: true }),
      commonJS({ extensions: [".js", ".ts"] }),
      typeScript({
        exclude: ["*.d.ts", "**/*.d.ts", "**/*.test.ts"],
      }),
      babel({
        babelHelpers: "bundled",
        configFile: path.resolve(__dirname, ".babelrc.js"),
      }),
    ],
  },
  // FOR ESModule and CommonJS
  {
    input: "src/index.ts",
    output: [
      // For ESModule
      {
        file: pkg.module,
        format: "es",
        sourcemap: "inline",
        exports: "named",
      },
      // For CommonJS
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: "inline",
        exports: "named",
      },
    ],
    plugins: [
      nodeResolve({ browser: false }),
      commonJS({ extensions: [".js", ".ts"] }),
      typeScript({
        exclude: ["*.d.ts", "**/*.d.ts", "**/*.test.ts"],
      }),
      babel({
        babelHelpers: "bundled",
        configFile: path.resolve(__dirname, ".babelrc.js"),
      }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: pkg.types, format: "esm" }],
    plugins: [dts.default()],
  },
];
